import express from 'express';
import controller from './search-reservation-code.controller';

const router = express.Router();

router.post('/search', controller.searchReservationCode);

export default router;
