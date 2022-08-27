import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { UserContext } from "../../contexts";

const UserCard = (props) => {
  const [user, setUser] = useContext(UserContext);
  const { fname, lname, id, isSelected } = user;
  console.log(user);
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };
  const handlerBtn = () => setUser({ ...user, isSelected: !isSelected });

  return (
    <article style={styles}>
      <h3>
        id={id}
        {fname}
        {lname}
      </h3>
      <button onClick={handlerBtn}>Select this User</button>
    </article>
  );
};

export default UserCard;
