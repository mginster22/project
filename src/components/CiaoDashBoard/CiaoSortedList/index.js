import React from "react";
import { PropTypes } from "prop-types";

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

CiaoSortedList.propTypes = {
  sortById: PropTypes.func,
  sortByLname: PropTypes.func,
  isUpSortById: PropTypes.bool,
  isUpSortByLname: PropTypes.bool,
};

export default CiaoSortedList;
