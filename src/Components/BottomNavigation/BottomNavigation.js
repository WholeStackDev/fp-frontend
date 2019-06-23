import React from "react";
import Styles from "./BottomNavigation.styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";

import Explore from "@material-ui/icons/ExploreOutlined";
import Search from "@material-ui/icons/SearchOutlined";

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
        label="Browse"
        icon={<Explore />}
        component={Link}
        to="/browse"
      />
      <BottomNavigationAction
        label="Search"
        icon={<Search />}
        component={Link}
        to="/search"
      />
    </BottomNavigation>
  );
}

export default BottomNav;
