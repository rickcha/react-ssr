import React from "react";
import { Route, Switch } from "react-router-dom";

import TestProvider from "../contexts/test";
import Home from "../pages/home";
import Test from "../pages/test";

function App() {
  return (
    <TestProvider>
      <Switch>
        <Route exact path="/page" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/page/test"
          render={(props) => <Test {...props} />}
        />
      </Switch>
    </TestProvider>
  );
}

export default App;
