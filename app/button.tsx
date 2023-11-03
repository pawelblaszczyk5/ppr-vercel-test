"use client";

import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Increase count</button>
    </div>
  );
};
