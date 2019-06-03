import React, { useEffect } from "react";
import UpdatePageName from "../../Utilities/PageNameUpdate";

import { Fragment } from "react";
import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Browse = () => {
  useEffect(() => {
    UpdatePageName("Browse");
  });

  return (
    <Fragment>
      <MenuNavigation url="/browse/speaker" label="Speaker" first />
      <MenuNavigation url="/browse/event" label="Event" />
    </Fragment>
  );
};

export default Browse;
