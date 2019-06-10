import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";

import Account from "../Account/Account";
import Browse from "../Browse/Browse";
import Search from "../Search/Search";
import Upload from "../Upload/Upload";
import TrackEdit from "../TrackEdit/TrackEdit";
import Speakers from "../Speakers/Speakers";

const Content = props => {
  return (
    <Fragment>
      <Route path="/" exact component={Browse} />
      <Route path="/account" exact component={Account} />
      <Route path="/browse" exact component={Browse} />
      <Route path="/search" exact component={Search} />
      <Route
        path="/upload"
        exact
        render={routeProps => {
          PageName("Upload");
          IsTopLevelPage(false);
          return <Upload {...routeProps} />;
        }}
      />
      <Route
        path="/track/edit"
        exact
        render={routeProps => {
          PageName("Upload Review");
          IsTopLevelPage(false);
          return <TrackEdit {...routeProps} />;
        }}
        key="test"
      />
      <Route path="/browse/speakers" exact component={Speakers} />
      {/* The div below is a hack to account for the spacing of the bottom nav and now playing bar */}
      <div style={{ height: "7rem" }} />
    </Fragment>
  );
};

export default Content;
