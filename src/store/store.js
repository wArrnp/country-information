import { applyMiddleware, createStore, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducer from "../modules/root";
import epics from "../modules/epics";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureMiddleware() {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(epics);

  return store;
}
