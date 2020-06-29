import React, { useState } from "react";
import { useTest } from "../contexts/test";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const { counter, increment, decrement } = useTest();
  const [localCounter, setLocalCounter] = useState(0);

  const incrementLocal = () => {
    setLocalCounter(localCounter + 1);
  };

  const decrementLocal = () => {
    setLocalCounter(localCounter - 1);
  };

  const handleClickRedirect = () => {
    history.push("/page/test");
  };

  return (
    <>
      <h1>home.js</h1>
      <div>Welcome to React SSR Testing</div>
      <div>
        <div>Context Counter: {counter}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <div>
        <div>Local Counter: {localCounter}</div>
        <button onClick={incrementLocal}>increment</button>
        <button onClick={decrementLocal}>decrement</button>
      </div>
      <button onClick={handleClickRedirect}>Redirect to Test</button>
    </>
  );
}

export default Home;
