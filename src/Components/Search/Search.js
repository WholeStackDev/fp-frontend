import React, { useEffect } from "react";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";

const Browse = props => {
  useEffect(() => {
    PageName("Search");
    IsTopLevelPage(true);
  });

  return <div style={{ padding: "2rem" }}>Coming soon</div>;
};

export default Browse;
