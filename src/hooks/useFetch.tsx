import axios from "axios";
import { Dispatch, useEffect, useState } from "react";

const useFetch = <T,>(
  url: string,
  init: T | undefined = undefined
): [
  T | undefined,
  Dispatch<React.SetStateAction<T | undefined>>,
  number | undefined
] => {
  const [data, setData] = useState<T | undefined>(init);
  const [status, setStatus] = useState<number | undefined>();

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setStatus(response.status);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, setData, status];
};

export default useFetch;
