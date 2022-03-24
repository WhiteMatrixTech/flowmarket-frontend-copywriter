import common from './common';
import global from './global';
import home from './home';
import menu from './menu';

export const resources = {
  en: {
    translation: {
      en: 'EN',
      ...home.en,
      ...common.en,
      ...menu.en
    }
  },
  zh: {
    translation: {
      zh: '中文',
      ...home.zh,
      ...common.zh,
      ...menu.zh
    }
  },
  global
};
