import * as React from "react";

export const Button = ({ title = "Hello React" }: { title?: string }) => {
  return <button>{title}</button>;
};
