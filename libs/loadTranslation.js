import { fr, en } from "make-plural";

export const initTranslation = (i18n) => {
  i18n.loadLocaleData({
    en: { plurals: en },
    fr: { plurals: fr },
    pseudo: { plurals: fr },
  });
};

const loadTranslation = async (locale, isProduction = true) => {
  let data;
  if (isProduction) {
    data = await import(`../translations/locales/${locale}/messages`);
  } else {
    data = await import(
      `@lingui/loader!../translations/locales/${locale}/messages.po`
    );
  }

  return data.messages;
};

export default loadTranslation;
