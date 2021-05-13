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
const apiData: IRoute = {
  to: "/api-data",
  id: "apiData",
  name: "Fetch Data from APIs",
};
const route2: IRoute = {
  to: "/route-2",
  id: "route2",
  name: "Route 2",
};

export const routes = {
  apiData,
  route2,
  home,
};
