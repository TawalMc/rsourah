import useSWRImmutable from "swr/immutable";

const BASE_API = "https://api.quran.com/api/v4";
export const LOCAL_KEYS = {
  SOURAH_INTERVALE: "sourah_intervale",
};

export class QuranChapter {
  constructor(id, name_arabic, name_simple, verses_count, name) {
    this.id = id;
    this.name_arabic = name_arabic;
    this.name_simple = name_simple;
    this.verses_count = verses_count;
    this.name = name;
  }
}

const parseQuranAPI = (data) => {
  const quranAllChapters = data.chapters.map((sourah, _) => {
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

const fetcherQuran = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((res) => parseQuranAPI(res));

export default function useQuran(lang) {
  const { data, error } = useSWRImmutable(
    `${BASE_API}/chapters?language=${lang}`,
    fetcherQuran
  );

  return {
    quranAllChapters: data,
    isLoading: !data && !error,
    isError: error,
  };
}
