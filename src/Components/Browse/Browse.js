import React, { useEffect } from "react";
import UpdatePageName from "../../Utilities/PageNameUpdate";

const Browse = props => {
  useEffect(() => {
    UpdatePageName("Browse");
  });

  return <div>Browse stuff</div>;
};

export default Browse;
