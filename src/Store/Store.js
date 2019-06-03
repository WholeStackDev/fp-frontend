import generalReducer from "./Reducers/GeneralReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
