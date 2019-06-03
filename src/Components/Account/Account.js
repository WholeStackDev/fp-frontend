import React, { useEffect } from "react";
import PageNameUpdate from "../../Utilities/PageNameUpdate";

import { Fragment } from "react";
import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Account = () => {
  useEffect(() => {
    PageNameUpdate("Account");
  });

  return (
    <Fragment>
      <MenuNavigation url="/upload" label="Upload" first />
      <MenuNavigation url="/my-uploads" label="My Uploads" />
    </Fragment>
  );
};

export default Account;
