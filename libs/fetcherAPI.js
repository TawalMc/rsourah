const BASE_API = "https://api.quran.com/api/v4";
export const LOCAL_KEYS = {
  SOURAH_INTERVALE: "sourah_intervale",
};

class QuranChapter {
  constructor(id, name_arabic, name_simple, verses_count, name) {
    this.id = id;
    this.name_arabic = name_arabic;
    this.name_simple = name_simple;
    this.verses_count = verses_count;
    this.name = name;
  }
}

export const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return { res: jsonData, status: true };
  } catch (error) {
    return {
      res: null,
      status: false,
    };
  }
};

const parseQuranAPI = (data) => {
  const quranAllChapters = data.chapters.map((sourah, index) => {
    const { id, name_simple, name_arabic, verses_count } = sourah;

    return new QuranChapter(
      id,
      name_simple,
      name_arabic,
      verses_count,
      sourah.translated_name.name
    );
  });

  return quranAllChapters;
};

export const getQuran = async (lang) => {
  if (typeof window !== "undefined") {
    let quranList = JSON.parse(localStorage.getItem(`version_${lang}`));
    if (quranList == null) {
      const { res, status } = await fetcher(
        `${BASE_API}/chapters?language=${lang}`
      );
      if (status) {
        quranList = parseQuranAPI(res);
        localStorage.setItem(`version_${lang}`, JSON.stringify(quranList));
      }
    }

    return {
      res: quranList,
      status: true,
    };
  }

  return {
    res: null,
    status: false,
  };
};
