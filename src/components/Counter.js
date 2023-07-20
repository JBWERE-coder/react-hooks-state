import React, { useState } from "react";

  export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount((count) => count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}


