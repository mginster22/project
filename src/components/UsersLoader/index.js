import React, { Component } from "react";
import styles from "./UsersLoader.module.scss";
import { Spinner } from "./../Spinner/index";
import { getRandomUsers } from "./../../api/index";

export default class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isError: false,
      isFetching: false,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });
    getRandomUsers({ page: currentPage })
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ isError: false }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  showUser = ({ email, login: { uuid }, name: { first, last } }) => (
    <li key={uuid} className={styles.user_item}>
      <h2>
        {first} {last}
      </h2>
      <p>{email}</p>
    </li>
  );
  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage <= 1) {
      return;
    }
    this.setState({ currentPage: currentPage - 1 });
  };
  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };
  render() {
    const { users, isError, isFetching, currentPage } = this.state;
    return (
      <section className={styles.users_container}>
        <h2>Users List:</h2>
        <div>
          <button onClick={this.prevPage}>&lt;</button>
          <span>{currentPage}</span>
          <button onClick={this.nextPage}>&gt;</button>
        </div>
        {isFetching ? (
          <Spinner />
        ) : isError ? (
          <div>ERORRRR!!!!</div>
        ) : (
          <ol>{users.map(this.showUser)}</ol>
        )}
      </section>
    );
  }
}
