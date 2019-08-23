import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import todos from './todos';
import reservationCode from './reservationCode';

const rootReducer = combineReducers({
  routing: routerReducer,
  todos,
  reservationCode,
});

export default rootReducer;
