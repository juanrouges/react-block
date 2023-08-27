import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const initialState = [
    {
      id: "kjjbnjk6",
      width: 200,
      height: 200,
      color: "yellow",
    },
    {
      id: "kjjbnjk8",
      width: 200,
      height: 200,
      color: "blue",
    },
    {
      id: "kjjbngh4",
      width: 200,
      height: 200,
      color: "red",
    },
    {
      id: "41jbnjk6",
      width: 200,
      height: 200,
      color: "orange",
    },
    {
      id: "kjjb78k6",
      width: 200,
      height: 200,
      color: "DarkSeaGreen",
    },
    {
      id: "kjjby7uj",
      width: 200,
      height: 200,
      color: "Thistle",
    },
    {
      id: "kjjujh67",
      width: 200,
      height: 200,
      color: "YellowGreen",
    },
  ];
  const [data, setData] = useState(initialState);

  function newBox(formData) {
    setData((data) => {
      return [...data, formData];
    });
  }

  function handleRemove(id) {
    setData((data) => {
      const dataCopy = data;
      return dataCopy.filter((item) => id !== item.id);
    });
  }

  return (
    <div>
      <div>
        <NewBoxForm submit={newBox} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((i) => (
          <Box
            key={i.id}
            color={i.color}
            width={i.width}
            height={i.height}
            handleRemove={() => handleRemove(i.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
