import React from "react";

const SelectedUsersList = (props) => {
  const { users, className } = props;
  const usersSelected = users.filter((user) => user.isSelected);
  return (
    <section>
      <h2 className={className}>Selected users:</h2>
      {usersSelected.map((user, i) => (
        <p key={i}>
          {user.fname}
          {user.lname}
        </p>
      ))}
    </section>
  );
};

export default SelectedUsersList;
