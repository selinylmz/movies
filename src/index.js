import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import store, { history } from "./store";
import { Home } from "./page/Home";
import { Detail } from "./page/Detail";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("#root")
);
