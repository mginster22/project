import React from "react";
import { loadNames } from "../../api";
import { useData } from "../../hooks";
import { Spinner } from "./../Spinner/index";

const FunkUsersList = () => {
  const { data, error, isFetching } = useData(loadNames);
  console.log(data);
  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <div>ERORR!!</div>;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      {error && <div>Error</div>}
      <ol>
        {data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default FunkUsersList;
