import { useState } from "react";

import logger from "./utils/logger";

type Props = {
  initCounter?: number;
  step?: number;
};

export const Counter = ({ initCounter = 0, step = 1 }: Props) => {
  const [count, setCount] = useState(initCounter);

  logger.info("Counter - render", { count, step });
  return (
    <p>
      Counter{" "}
      <button
        type="button"
        onClick={() => setCount((counter) => counter + step)}
      >
        {count}
      </button>
    </p>
  );
};
