import React from "react";

//7 column grid with full height adaptable to responsive design
const Grid = ({ children }) => {
  return <div className="h-full w-full grid grid-cols-7">{children}</div>;
};

export default Grid;
