import {
  SEARCH_RESERVATION_CODE,
} from '@constants/index';
import api from '@lib/api';
import generateActionCreator from '@lib/generateActionCreator';

export const searchReservationCodeAction = generateActionCreator(SEARCH_RESERVATION_CODE, 'reservationCode');

export const searchReservationCode = (params) => {
  return dispatch => {
    return api
      .post('/api/search-reservation-code/search', { params })
      .then(reservationCode => {
        alert(`reservationCode: ${reservationCode}`);
        dispatch(searchReservationCodeAction(reservationCode));

        return Promise.resolve(reservationCode);
      })
      .catch(error => {
  console.log("nghia");
        alert(error);
        return Promise.resolve(error);
      });
  };
};
