import { useEffect, useState } from "react";

import { Button } from "./Button";
import { Counter } from "./Counter";
import logger from "./utils/logger";

type Props = {
  counter: number;
};

function randomNumberBetween1An10(): Promise<number> {
  logger.info("generating random number between 1 and 10");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10) + 1);
    }, 500);
  });
}

export const BatchingExample = ({ counter }: Props) => {
  const [step, setStep] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [, setUpdatedAt] = useState(0);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setStep(step + 1);
  };

  // NOTE: this effect has been called 2 times with React 18.x
  // change theme and increment step
  useEffect(() => {
    logger.warn("BatchingExample - theme", isDarkMode ? "dark" : "light");
    setTimeout(() => {
      setStep(step + 1);
      setUpdatedAt(Date.now());
    }, 1000);
  }, [isDarkMode]);

  const onRandomCounterHandler = () => {
    randomNumberBetween1An10().then((value) => {
      setStep(value);
      setUpdatedAt(Date.now());
    });
  };

  logger.warn("BatchingExample - render");
  return (
    <div>
      {/* toggle dark mode */}
      <p>
        Theme:
        <Button
          title={`${isDarkMode ? "Dark" : "Light"}`}
          onClick={onToggleDarkMode}
        />
      </p>
      <p>
        Step{" "}
        <Button
          onClick={() => (step > 1 ? setStep(step - 1) : null)}
          title=" - "
        />
        {step} <Button onClick={() => setStep(step + 1)} title=" + " />
      </p>
      <Button title="Random Step" onClick={onRandomCounterHandler} />
      <Counter initCounter={counter} step={step} />
    </div>
  );
};
