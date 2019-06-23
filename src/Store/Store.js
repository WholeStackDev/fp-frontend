import generalReducer from "./Reducers/GeneralReducer";
import uploadReducer from "./Reducers/UploadReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  upload: uploadReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
