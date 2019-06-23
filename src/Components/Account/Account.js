import React, { useEffect } from "react";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";

import { Fragment } from "react";
import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Account = () => {
  useEffect(() => {
    PageName("Account");
    IsTopLevelPage(true);
  });

  return (
    <Fragment>
      <MenuNavigation url="/upload" label="Upload" first />
    </Fragment>
  );
};

export default Account;
