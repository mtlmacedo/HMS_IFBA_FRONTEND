import { combineReducers } from 'redux';
import reservas from './reservas';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  reservas,
  errors,
  messages,
  auth,
});
