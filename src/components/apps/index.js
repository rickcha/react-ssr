import React from "react";
import { StaticRouter, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

import TestProvider from "../contexts/test";
import Home from "../pages/home";
import Test from "../pages/test";

function App(props) {
  // const history = createMemoryHistory();

  return (
    <TestProvider>
      <Switch>
        <Route exact path="/app" render={(props) => <Home {...props} />} />
        <Route exact path="/app/test" render={(props) => <Test {...props} />} />
      </Switch>
    </TestProvider>
  );
}

export default App;
