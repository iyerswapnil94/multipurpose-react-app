export interface IRoute {
  to: string;
  id?: string;
  name: string;
}

const home: IRoute = {
  to: "/",
  id: "home",
  name: "Home",
};
const route1: IRoute = {
  to: "/route-1",
  id: "route1",
  name: "Route 1",
};
const route2: IRoute = {
  to: "/route-2",
  id: "route2",
  name: "Route 2",
};

export const routes = {
  route1,
  route2,
  home,
};
