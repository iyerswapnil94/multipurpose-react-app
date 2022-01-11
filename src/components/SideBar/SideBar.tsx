import {
  Divider,
  List,
  ListItem,
  ListItemText,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import * as React from "react";
import {
  RouteComponentProps,
  useHistory,
  withRouter,
} from "react-router-dom";
import ReactLogo from "images/reactJs-icon.svg";

import { styles } from "./styles";
import { routes } from "src/config/routes.config";
import classnames from "classnames";

interface IProps extends RouteComponentProps, WithStyles {}

const SideBarComponent: React.FC<IProps> = ({ classes, location }) => {
  const history = useHistory();

  const switchUrl = (path: string) => () => {
    history.push(path);
  };

  return (
    <>
      <ReactLogo className={classes.rotatingLogo} onClick={switchUrl(routes.home.to)}/>
      <List className={classes.sideBarList} component="nav">
        <Divider className={classes.divider} />
        <ListItem
          className={classnames(
            classes.listItem,
            location.pathname === routes.apiData.to && classes.selectedListItem
          )}
          button
          onClick={switchUrl(routes.apiData.to)}
        >
          <ListItemText primary={routes.apiData.name} />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          className={classnames(
            classes.listItem,
            location.pathname === routes.sumGame.to && classes.selectedListItem
          )}
          button
          onClick={switchUrl(routes.sumGame.to)}
        >
          <ListItemText primary={routes.sumGame.name} />
        </ListItem>
        <Divider className={classes.divider} />
      </List>
    </>
  );
};

export const Sidebar = withRouter(withStyles(styles)(SideBarComponent));
