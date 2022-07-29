import React, { Component } from "react";
import SelectedUsersList from "../SelectedUsersList/index";
import UsersList from "../UsersList/index";
import styles from "./UsersDashboard.module.css";
const usersDB = [
  {
    id: 4,
    fname: "Elon",
    lname: "Musk",
  },
  {
    id: 1,
    fname: "Molly",
    lname: "Dolly",
  },
  {
    id: 3,
    fname: "Elen",
    lname: "Musk",
  },
  {
    id: 2,
    fname: "Tom",
    lname: "Chrom",
  },
  {
    id: 5,
    fname: "Fred",
    lname: "Bredsk",
  },
];
class UsersDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setUserSelected = (newUser) => {
    this.setState({ users: newUser });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUsersList users={users} className={styles.container} />
        <UsersList
          users={users}
          setUserSelected={this.setUserSelected}
          className={styles.container}
        />
      </>
    );
  }
}

export default UsersDashboard;
