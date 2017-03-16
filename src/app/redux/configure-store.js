import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from './modules';


export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(createEpicMiddleware(rootEpic))
  );
}
