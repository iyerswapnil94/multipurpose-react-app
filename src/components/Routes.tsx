import * as React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import { IRoute, routes } from "../config/routes.config";
import { ApiContainer } from "./APIData";
import { SumGame } from "./SumGame";
import { Home } from "./Home";

const routeCreater = (Component: React.ComponentType, routeConfig: IRoute) => ({
  Component,
  path: routeConfig.to,
});

const routeMap = [
  routeCreater(Home, routes.home),
  routeCreater(ApiContainer, routes.apiData),
  routeCreater(SumGame, routes.sumGame),
];

const MainRoutesComponent: React.FunctionComponent<
  RouteComponentProps
> = () => {
  return (
    <Switch>
      <>
        {routeMap.map(({ Component, path }) => {
          return <Route exact path={path} key={path} component={Component} />;
        })}
      </>
    </Switch>
  );
};

export const MainRoutes = withRouter(MainRoutesComponent);
