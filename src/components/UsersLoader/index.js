import React, { Component } from "react";
import styles from "./UsersLoader.module.scss";
import { Spinner } from "./../Spinner/index";
import { getRandomUsers } from "./../../api/index";
import config from "./../../configs/index";

export default class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      fetching: false,
      currentPage: 1,
      currentAmount: config.DEFAULT_AMOUNT,
      currentNat: config.DEFAULT_NUT,
    };
  }

  load = () => {
    const { currentPage, currentAmount, currentNat } = this.state;
    this.setState({ fetching: true });
    getRandomUsers({
      page: currentPage,
      results: currentAmount,
      nat: currentNat,
    })
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ fetching: false }));
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, currentAmount, currentNat } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      currentAmount !== prevState.currentAmount ||
      currentNat !== prevState.currentNat
    ) {
      this.load();
    }
  }
  showUser = ({ name: { first, last }, login: { uuid }, nat }) => (
    <li key={uuid} className={styles.user_item}>
      <h2>
        {first} {last} {nat}
      </h2>
    </li>
  );
  showRadio = (n) => {
    const { currentAmount } = this.state;
    return (
      <label key={n}>
        <input
          type="radio"
          value={n}
          checked={currentAmount === n}
          onChange={this.handlerRadio}
        />
        {n}
      </label>
    );
  };
  showNat = (nat) => <option key={nat}>{nat}</option>;
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
  handlerRadio = ({ target: { value } }) => {
    this.setState({ currentAmount: Number(value) });
  };
  handlerNat = ({ target: { value } }) => {
    this.setState({ currentNat: value });
  };
  render() {
    const { users, error, fetching, currentPage, currentNat } = this.state;
    return (
      <section className={styles.users_container}>
        <h2>Users List:</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <span>{currentPage}</span>
        <button onClick={this.nextPage}>&gt;</button>
        <select onChange={this.handlerNat} value={currentNat}>
          {config.DEFAULT_SELECT_NAT.map(this.showNat)}
        </select>
        {config.DEFAULT_AMOUNTS.map(this.showRadio)}
        {fetching ? (
          <Spinner />
        ) : error ? (
          <div>ERORRR</div>
        ) : (
          <ol>{users.map(this.showUser)}</ol>
        )}
      </section>
    );
  }
}
