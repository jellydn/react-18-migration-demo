import * as React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <p>
      <button type="button" onClick={() => setCount((counter) => counter + 1)}>
        count is: {count}
      </button>
    </p>
  );
};
