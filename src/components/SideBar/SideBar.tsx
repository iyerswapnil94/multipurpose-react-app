import {
  Divider,
  List,
  ListItem,
  ListItemText,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactLogo from "images/reactJs-icon.svg";

import { styles } from "./styles";
import { routes } from "src/config/routes.config";

interface IProps extends RouteComponentProps, WithStyles {}

const SideBarComponent: React.FC<IProps> = ({ classes }) => (
  <>
    <ReactLogo className={classes.rotatingLogo} />
    <List className={classes.sideBarList} component="nav">
      <Divider className={classes.divider} />
      <ListItem
        className={classes.selectedListItem}
        button
        component="a"
        href={routes.route1.to}
      >
        <ListItemText primary={routes.route1.name} />
      </ListItem>
      <Divider className={classes.divider} />
      <ListItem button component="a" href={routes.route2.to}>
        <ListItemText primary={routes.route2.name} />
      </ListItem>
      <Divider className={classes.divider} />
    </List>
  </>
);

export const Sidebar = withRouter(withStyles(styles)(SideBarComponent));
