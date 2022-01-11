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
const sumGame: IRoute = {
  to: "/sum-game",
  id: "sumGame",
  name: "Sum Game",
};

export const routes = {
  apiData,
  sumGame,
  home,
};
