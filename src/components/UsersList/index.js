import React from "react";
import UserCard from "../UserCard/index";
import { PropTypes } from "prop-types";
import { userPropType } from "../UserCard/index";

const UsersList = (props) => {
  const { users, setUserSelected } = props;

  const setIsSelected = (id) => {
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    setUserSelected(newUsers);
  };
  const showUser = (user) => (
    <UserCard key={user.id} user={user} setIsSelected={setIsSelected} />
  );
  return (
    <section>
      <h2>Users list:</h2>
      {users.map(showUser)}
    </section>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(userPropType).isRequired,
  setUserSelected: PropTypes.func.isRequired,
};
export default UsersList;
