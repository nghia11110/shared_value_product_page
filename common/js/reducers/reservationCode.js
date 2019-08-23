import {
  SEARCH_RESERVATION_CODE,
} from '@constants/index';

const defaultState = {
  reservationCode: '',
};

const reservationCode = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_RESERVATION_CODE:
      return {
        reservationCode: action.reservationCode
      };
    default:
      return state;
  }
};

export default reservationCode;
