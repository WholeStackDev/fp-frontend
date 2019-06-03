import React, { useEffect } from "react";
import UpdatePageName from "../../Utilities/PageNameUpdate";

const Browse = props => {
  useEffect(() => {
    UpdatePageName("Search");
  });

  return <div style={{ padding: "2rem" }}>Coming soon</div>;
};

export default Browse;
