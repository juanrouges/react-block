import { useState } from "react";

const useFlip = (initState) => {
  const [state, setState] = useState(initState);
  const flipState = () => {
    setState((state) => !state);
  };

  return [state, flipState];
};

export default useFlip;
