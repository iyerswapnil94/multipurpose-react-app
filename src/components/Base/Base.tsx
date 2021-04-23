import { Sidebar } from "components/SideBar/SideBar";
import * as React from "react";
// import { TopBar } from "components/TopBar";

import { useStyles } from "./styles";

const BaseComponent: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.baseContainer}>
      <div className={classes.sideBarContainer}>
        <Sidebar />
      </div>
      <main
        className={classes.pageContainer}
        data-component="main-content-component"
      >
        {/* <TopBar /> */}
        <div className={classes.pageContent}>{children}</div>
      </main>
    </div>
  );
};

export const Base = BaseComponent;
