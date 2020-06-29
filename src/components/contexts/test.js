import React, { createContext, useContext, useState } from "react";

const TestContext = createContext();

const TestProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <TestContext.Provider
      value={{ counter, increment, decrement }}
      {...props}
    />
  );
};

const useTest = () => useContext(TestContext);

export { useTest };
export default TestProvider;
