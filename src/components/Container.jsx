import React from "react";

export function Container({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
