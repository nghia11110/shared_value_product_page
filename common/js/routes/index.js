import Error from '@pages/Error';
import Home from '@pages/Home';
import Todos from '@pages/Todos';
import GmoPayment from '@pages/GmoPayment';
import SearchReservationCode from '@pages/SearchReservationCode';
import SearchReservationCodeResult from '@pages/SearchReservationCode/result';

export default [
  // { path: '/', exact: true, component: Home },
  // { path: '/todos', exact: true, component: Todos },
  // { path: '/gmo_payment', exact: true, component: GmoPayment },
  { path: '/', exact: true, component: SearchReservationCode },
  { path: '/search_reservation_code_result', exact: true, component: SearchReservationCodeResult },
  { path: '*', component: Error }
];
