import React from "react";
import { PropTypes } from "prop-types";

const UserCard = (props) => {
  const {
    user: { id, fname, lname, isSelected },

    setIsSelected,
  } = props;
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };

  return (
    <article style={styles}>
      <h3>
        id={id}
        {fname}
        {lname}
      </h3>
      <button onClick={() => setIsSelected(id)}>Select this User</button>
    </article>
  );
};
UserCard.propTypes = {
  user: PropTypes.object,
  setIsSelected: PropTypes.func,
};
export default UserCard;
