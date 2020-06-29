import React, { useState } from "react";
import { useTest } from "../contexts/test";

function Home() {
  const { counter, increment, decrement } = useTest();
  const [localCounter, setLocalCounter] = useState(0);

  const incrementLocal = () => {
    setLocalCounter(localCounter + 1);
  };

  const decrementLocal = () => {
    setLocalCounter(localCounter - 1);
  };

  return (
    <>
      <div>Welcome to React SSR Testing</div>
      <div>Context Counter: {counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <div>Local Counter: {localCounter}</div>
      <button onClick={incrementLocal}>increment</button>
      <button onClick={decrementLocal}>decrement</button>
    </>
  );
}

export default Home;
