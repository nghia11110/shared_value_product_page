import {
  SEARCH_RESERVATION_CODE,
} from '@constants/index';
import api from '@lib/api';
import generateActionCreator from '@lib/generateActionCreator';
import { push } from 'react-router-redux';
import i18n from '@lib/i18n';

export const updateReservationCodeAction = generateActionCreator(SEARCH_RESERVATION_CODE, 'reservationCode');

export const searchReservationCode = (params) => {
  return dispatch => {
    return api
      .post('/api/search-reservation-code/search', { params })
      .then(reservationCodeObj => {
        if (!Object.keys(reservationCodeObj).length) {
          reservationCodeObj.reservationCode = i18n.t('common:search_reservation_code.not_found');
        }
        dispatch(updateReservationCodeAction(reservationCodeObj.reservationCode));
        dispatch(push('/search_reservation_code_result'));
        // return Promise.resolve(reservationCode);
      })
      .catch(error => {
        alert(error);
        return Promise.resolve(error);
      });
  };
};
