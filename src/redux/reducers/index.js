import {combineReducers} from 'redux';
import categories from './categoryReducer';
import jokes from './jokesReducer'

export default combineReducers({
  categories,
  jokes
});
