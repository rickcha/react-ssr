import React from "react";
import { useTest } from "../contexts/test";

function Home(props) {
  console.log("props", props);
  const { counter, increment, decrement } = useTest();

  return (
    <>
      <div>Welcome to React SSR Testing</div>
      <div>Value: {counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default Home;
