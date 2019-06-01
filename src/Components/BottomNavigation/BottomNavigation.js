import React from "react";
import Styles from "./BottomNavigation.styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";

import Library from "@material-ui/icons/LibraryBooksOutlined";
import Explore from "@material-ui/icons/ExploreOutlined";
import Search from "@material-ui/icons/SearchOutlined";
import Account from "@material-ui/icons/AccountCircleOutlined";

function BottomNav() {
  const classes = Styles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Library"
        icon={<Library />}
        component={Link}
        to="/library"
      />
      <BottomNavigationAction
        label="Explore"
        icon={<Explore />}
        component={Link}
        to="/explore"
      />
      <BottomNavigationAction
        label="Search"
        icon={<Search />}
        component={Link}
        to="/search"
      />
      <BottomNavigationAction
        component={Link}
        to="/account"
        label="Account"
        icon={<Account />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
