import React from "react";
import Styles from "./BottomNavigation.styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

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
      <BottomNavigationAction label="Library" icon={<Library />} />
      <BottomNavigationAction label="Explore" icon={<Explore />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
      <BottomNavigationAction label="Account" icon={<Account />} />
    </BottomNavigation>
  );
}

export default BottomNav;
