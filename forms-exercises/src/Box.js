import React from "react";

const Box = ({ color, width, height, handleRemove }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
    >
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;
