import i18next from 'i18next';
import commonEn from '@translations/en/common.json';
import commonJa from '@translations/ja/common.json';
import commonZhChs from '@translations/zh_chs/common.json';
import commonZhCht from '@translations/zh_cht/common.json';
import commonKo from '@translations/ko/common.json';
import validatorEn from '@translations/en/validator.json';
import validatorJa from '@translations/ja/validator.json';
import validatorZhChs from '@translations/zh_chs/validator.json';
import validatorZhCht from '@translations/zh_cht/validator.json';
import validatorKo from '@translations/ko/validator.json';
import { DEFAULT_LANGUAGE } from '@constants';
import Util from '@utils/util';

const lng = Util.getLanguage() === '' ? DEFAULT_LANGUAGE : Util.getLanguage();

// i18next
export default i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng, // language to use
  ns: ['common', 'validator'],
  resources: {
    en: {
      common: commonEn, // 'common' is our custom namespace
      validator: validatorEn,
    },
    ja: {
      common: commonJa,
      validator: validatorJa,
    },
    zh_chs: {
      common: commonZhChs,
      validator: validatorZhChs,
    },
    zh_cht: {
      common: commonZhCht,
      validator: validatorZhCht,
    },
    ko: {
      common: commonKo,
      validator: validatorKo,
    },
  },
});
