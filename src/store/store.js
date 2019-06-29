import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from '../modules/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureMiddleware() {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(ReduxThunk)),
  );

  return store;
}
