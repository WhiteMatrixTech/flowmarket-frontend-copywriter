import common from './common';
import global from './global';
import home from './home';

export const resources = {
  en: {
    translation: {
      en: 'EN',
      ...home.en,
      ...common.en
    }
  },
  zh: {
    translation: {
      zh: '中文',
      ...home.zh,
      ...common.zh
    }
  },
  global
};
