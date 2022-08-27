import React from "react";
import { useData } from "../../hooks";
import { loadPhones } from "./../../api/index";
import { Spinner } from "./../Spinner/index";

const FunkPhoneList = () => {
  const { data, error, isFetching } = useData(loadPhones);
  return (
    <div>
      {isFetching && <Spinner />}
      {error && <div>ERORR</div>}
      <ol>
        {data.map(({ name, price }, i) => (
          <li key={i}>
            {name} {price}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FunkPhoneList;
