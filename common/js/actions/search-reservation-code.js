import {
  SEARCH_RESERVATION_CODE,
} from '@constants/index';
import api from '@lib/api';
import generateActionCreator from '@lib/generateActionCreator';
import { push } from 'react-router-redux';

export const updateReservationCodeAction = generateActionCreator(SEARCH_RESERVATION_CODE, 'reservationCode');

export const searchReservationCode = (params) => {
  return dispatch => {
    return api
      .post('/api/search-reservation-code/search', { params })
      .then(reservationCode => {
        dispatch(updateReservationCodeAction(reservationCode));
        dispatch(push('/search_reservation_code_result'));
        // return Promise.resolve(reservationCode);
      })
      .catch(error => {
        alert(error);
        return Promise.resolve(error);
      });
  };
};
