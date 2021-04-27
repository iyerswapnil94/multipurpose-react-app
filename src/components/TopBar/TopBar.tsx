import { AppBar } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routes } from "src/config/routes.config";

import { styles } from "./styles";

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

const TopBarComponent: React.FunctionComponent<IProps> = ({
  classes,
  location,
}) => {
  const selectedRoute = Object.values(routes).find(
    (x) => x.to === location.pathname
  );
  const heading = selectedRoute ? selectedRoute.name : "";

  return (
    <AppBar position="static" className={classes.appTopBar}>
      <div>{heading}</div>
    </AppBar>
  );
};

export const TopBar = withStyles(styles)(withRouter(TopBarComponent));
