import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Base } from "components/Base";
import { MainRoutes } from "components/Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { AnyAction, Store } from "redux";
import { IApplicationState } from "store/state.model";

interface IProps {
  store: Store<IApplicationState, AnyAction>;
}

let AppComponent: React.FC<IProps> = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <Base>
        <MainRoutes />
      </Base>
    </BrowserRouter>
  </Provider>
);

if (module.hot) {
  AppComponent = hot(AppComponent);
}

export const App = AppComponent;
