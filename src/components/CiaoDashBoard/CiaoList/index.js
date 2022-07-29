import React from "react";
import Ciao from "../Ciao/index";

const CiaoList = (props) => {
  const { users } = props;
  const mapUsers = (user) => (
    <li key={user.id}>
      <Ciao fname={user.fname} sname={user.lname} id={user.id} />
    </li>
  );
  return <ol>{users.map(mapUsers)}</ol>;
};

export default CiaoList;
