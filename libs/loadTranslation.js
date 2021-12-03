const loadTranslation = async (locale, isProduction) => {
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
