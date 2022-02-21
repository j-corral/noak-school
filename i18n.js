// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
const CustomI18nPages = require("./config/i18n/pages.js");
const CustomI18nLang = require("./config/i18n/lang.js");

const DefaultI18nLang = ['fr'];
const DefaultI18nPages = {
    "*": ["common", "menu", "msg", "cookies", "theme"],
    "/p/legal": ["legal"],
    "/p/terms": ["terms"],
}  ;

const locales = [...DefaultI18nLang, ...CustomI18nLang.locales];
const pages = {...DefaultI18nPages, ...CustomI18nPages};

module.exports = {
  logBuild: false,
  locales,
  defaultLocale: CustomI18nLang.defaultLocale ?? "fr",
  pages,
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (locale, namespace) => import(`./public/locales/${locale}/${namespace}`).then((m) => m.default),
};
