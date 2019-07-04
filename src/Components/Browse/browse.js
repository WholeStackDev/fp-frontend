import React from "react";
import { Fragment } from "react";
import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Browse = () => {
  return (
    <Fragment>
      <MenuNavigation url="/browse/tracks" label="Tracks" first />
      {/* <MenuNavigation url="/browse/event" label="Event" /> */}
    </Fragment>
  );
};

export default Browse;
