import { React, useState, useEffect } from "react";

export default function useData(getData) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    getData()
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
  }, [getData]);
  return { data, error, isFetching };
}
