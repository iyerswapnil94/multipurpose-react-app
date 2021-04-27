import React from "react";
import ReactDOM from "react-dom";
import { App } from "components/App";
import { AppStore } from "store/configureStore";

const store = AppStore.getInstance({});
ReactDOM.render(<App store={store}/>, document.getElementById("root"));
