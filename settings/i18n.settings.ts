const LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
const LOCALE_PATH = 'static/locales';

const DEFAULT_LANGUAGE = 'da';
const OTHER_LANGUAGES = ['en'];
const LOCALE_SUBPATHS = false;

const translation = {
  debug: false,
  allLanguages: OTHER_LANGUAGES.concat([DEFAULT_LANGUAGE]),
  defaultLanguage: DEFAULT_LANGUAGE,

  localePath: `./${LOCALE_PATH}/`,
  localeSubpaths: LOCALE_SUBPATHS,
};

export { translation, LOCALE_PATH, LOCALE_STRUCTURE };
