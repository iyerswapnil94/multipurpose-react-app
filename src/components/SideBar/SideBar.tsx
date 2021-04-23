import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { styles } from "./styles";

interface IProps extends RouteComponentProps, WithStyles {}

class SideBarComponent extends React.PureComponent<IProps> {
  public render() {
    return <div>Side bar here</div>;
  }
}

export const Sidebar = withRouter(withStyles(styles)(SideBarComponent));
