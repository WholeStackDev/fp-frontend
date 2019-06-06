import * as actionTypes from "../Actions";

const initialState = {
  pageName: "",
  isTopLevelPage: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_NAME:
      return {
        ...state,
        pageName: action.value
      };
    case actionTypes.UPDATE_IS_TOP_LEVEL_PAGE:
      return {
        ...state,
        isTopLevelPage: action.value
      };
    default:
      return state;
  }
};

export default reducer;
