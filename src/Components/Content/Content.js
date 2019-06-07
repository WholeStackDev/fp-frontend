import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Account from "../Account/Account";
import Browse from "../Browse/Browse";
import Search from "../Search/Search";
import Upload from "../Upload/Upload";
import TrackEdit from "../TrackEdit/TrackEdit";

const Content = props => {
  return (
    <Fragment>
      <Route path="/" exact component={Browse} />
      <Route path="/account" exact component={Account} />
      <Route path="/browse" exact component={Browse} />
      <Route path="/search" exact component={Search} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/track/edit" exact component={TrackEdit} key="test" />
      {/* The div below is a hack to account for the spacing of the bottom nav and now playing bar */}
      <div style={{ height: "7rem" }} />
    </Fragment>
  );
};

export default Content;
