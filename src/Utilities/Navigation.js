import store from "../Store/Store";
import { UPDATE_IS_TOP_LEVEL_PAGE, UPDATE_PAGE_NAME } from "../Store/Actions";

export const PageName = value => {
  store.dispatch({ type: UPDATE_PAGE_NAME, value: value });
};

export const IsTopLevelPage = value => {
  store.dispatch({ type: UPDATE_IS_TOP_LEVEL_PAGE, value });
};
