import store from "../Store/Store";

const PageUpdate = value => {
  store.dispatch({ type: "UPDATE_PAGE_NAME", value: value });
};

export default PageUpdate;
