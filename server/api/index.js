import express from 'express';
import bodyParser from 'body-parser';
import todos from './todos';
import gmoPayment from './gmo-payment/';
import searchReservationCode from './search-reservation-code';

const Api = express();

// always send JSON headers
Api.use((req, res, next) => {
  res.contentType('application/json');
  next();
});

// parse JSON body
Api.use(bodyParser.json());

// Add all API endpoints here
Api.use('/todos', todos);
Api.use('/gmo-payment', gmoPayment);
Api.use('/search-reservation-code', searchReservationCode);

export default Api;
