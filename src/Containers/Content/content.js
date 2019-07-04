import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigate } from "../../Utilities/Navigation";

import { Browse, Account, Search } from "../../Components";
import { Upload, Tracks } from "../../Containers";

const Content = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          path="/"
          exact
          render={routeProps => {
            Navigate("Browse", false);
            return <Browse {...routeProps} />;
          }}
        />

        <Route
          path="/browse"
          exact
          render={routeProps => {
            Navigate("Browse", false);
            return <Browse {...routeProps} />;
          }}
        />

        <Route
          path="/account"
          exact
          render={routeProps => {
            Navigate("Account", true);
            return <Account {...routeProps} />;
          }}
        />

        <Route
          path="/search"
          exact
          render={routeProps => {
            Navigate("Search", true);
            return <Search {...routeProps} />;
          }}
        />

        <Route
          path="/browse/tracks"
          exact
          render={routeProps => {
            Navigate("Tracks", false);
            return <Tracks {...routeProps} />;
          }}
        />

        <Route
          path="/upload"
          exact
          render={routeProps => {
            Navigate("Upload", false);
            return <Upload {...routeProps} />;
          }}
        />
      </Switch>
      {/* The div below is a hack to account for the spacing of the bottom nav and now playing bar */}
      <div style={{ height: "7rem" }} />
    </Fragment>
  );
};

export default Content;
