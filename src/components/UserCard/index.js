import React from "react";
import { PropTypes } from "prop-types";

const UserCard = (props) => {
  const {
    user: { id, fname, lname, isSelected },

    setIsSelected,
  } = props;
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };
  const handlerBtn = () => setIsSelected(id);

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

export const userPropType = PropTypes.shape({
  id: PropTypes.number,
  fname: PropTypes.string,
  lname: PropTypes.string,
  isSelected: PropTypes.bool,
});

UserCard.propTypes = {
  user: userPropType,
  setIsSelected: PropTypes.func.isRequired,
};
export default UserCard;
