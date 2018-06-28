import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';


const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  return store;
}