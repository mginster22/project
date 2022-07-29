import React from "react";

const CiaoSortedList = (props) => {
  const { sortById, sortByLname, isUpSortById, isUpSortByLname } = props;

  return (
    <>
      <button onClick={sortById}>
        sort by ID {isUpSortById ? "DN" : "UP"}
      </button>
      <button onClick={sortByLname}>
        sort by last name {isUpSortByLname ? "DN" : "UP"}
      </button>
    </>
  );
};

export default CiaoSortedList;
