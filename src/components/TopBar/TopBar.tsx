import { AppBar } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { styles } from "./styles";

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

const TopBarComponent: React.FunctionComponent<IProps> = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.appTopBar}>
      <div>Top bar title</div>
    </AppBar>
  );
};

export const TopBar = withStyles(styles)(withRouter(TopBarComponent));
