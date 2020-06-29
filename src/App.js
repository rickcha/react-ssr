import React from "react";
import Home from "./components/pages/home";
import TestProvider from "./components/contexts/test";

function App() {
  return (
    <TestProvider>
      <Home />
    </TestProvider>
  );
}

export default App;
