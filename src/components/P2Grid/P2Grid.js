import React from "react";

export default function P2Grid(props) {
  const gridSize = props.gridSize;
  return <div className={"col-" + gridSize}>{props.children}</div>;
}
