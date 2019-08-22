import cookie from 'react-cookie';
import { DEFAULT_LANGUAGE } from '@constants/';

class Util {
  setToken(token) {
    cookie.save('_sharedvalue_secret', token || this.getToken(), { maxAge: 60 * 60 * 24 * 180, path: '/' });
  }

  getToken() {
    return cookie.load('_sharedvalue_secret') || '';
  }

  removeToken() {
    cookie.remove('_sharedvalue_secret', { path: '/' });
  }

  getLanguage() {
    return cookie.load('_sharedvalue_lng') || DEFAULT_LANGUAGE;
  }

  setLanguage(lng) {
    cookie.save('_sharedvalue_lng', lng || this.getLanguage(), { maxAge: 60 * 60 * 24 * 180, path: '/' });
  }
}

export default new Util();
