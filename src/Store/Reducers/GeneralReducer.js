import * as actionTypes from "../Actions";

const initialState = {
  pageName: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_NAME:
      return {
        ...state,
        pageName: action.value
      };
    default:
      return state;
  }
};

export default reducer;
