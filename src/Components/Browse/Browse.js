import React, { useEffect } from "react";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";

import { Fragment } from "react";
import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Browse = () => {
  useEffect(() => {
    PageName("Browse");
    IsTopLevelPage(true);
  });

  return (
    <Fragment>
      <MenuNavigation url="/browse/speaker" label="Speaker" first />
      <MenuNavigation url="/browse/event" label="Event" />
    </Fragment>
  );
};

export default Browse;
