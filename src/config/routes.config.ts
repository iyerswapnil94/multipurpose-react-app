export interface IRoute {
  to: string;
  id?: string;
}

const home: IRoute = {
  to: "/",
  id: "home",
};
const route1: IRoute = {
  to: "/route-1",
  id: "route1",
};

export const routes = {
  route1,
  home,
};
