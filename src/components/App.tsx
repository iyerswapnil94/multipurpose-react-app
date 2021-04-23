import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Base } from "components/Base";
import { MainRoutes } from "components/Routes";
import CssBaseline from "@material-ui/core/CssBaseline";

const AppComponent: React.FC = () => (
  <BrowserRouter>
    <CssBaseline />
    <Base>
      <MainRoutes />
    </Base>
  </BrowserRouter>
);

export const App = AppComponent;
