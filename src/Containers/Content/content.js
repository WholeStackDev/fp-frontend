import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";

import Account from "../../Components/Account/Account";
import Browse from "../../Components/Browse/Browse";
import Search from "../../Components/Search/Search";
import Speakers from "../../Components/Speakers/Speakers";
import Tracks from "../../Components/Tracks/Tracks";
import Upload from "../Upload";

const Content = props => {
  return (
    <Fragment>
      <Route path="/" exact component={Browse} />
      <Route path="/account" exact component={Account} />
      <Route path="/browse" exact component={Browse} />
      <Route path="/search" exact component={Search} />
      <Route path="/browse/speakers" exact component={Speakers} />
      <Route path="/browse/tracks" exact component={Tracks} />
      <Route
        path="/upload"
        exact
        render={routeProps => {
          PageName("Upload");
          IsTopLevelPage(false);
          return <Upload {...routeProps} />;
        }}
      />
      {/* The div below is a hack to account for the spacing of the bottom nav and now playing bar */}
      <div style={{ height: "7rem" }} />
    </Fragment>
  );
};

export default Content;
