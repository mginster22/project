import React from "react";
import { UserProfileContext } from "../../../contexts";
import { WithUser } from "../../HOCs";
const UserProfile = ({ user: { fname, lname, avatar } }) => {
  return (
    <div>
      <h2>
        {fname} {lname}
      </h2>
      <img src={avatar} alt={fname} />
    </div>
  );
};

export default WithUser(UserProfile);
