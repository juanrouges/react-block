import { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (url) => {
  const [response, setResponse] = useState([]);

  const getResponse = async () => {
    const { data } = await axios.get(url);
    setResponse([...response, { ...data, id: uuid() }]);
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  return [response, getResponse];
};

export default useAxios;
