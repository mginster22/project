import React, { Component } from "react";

export default class DataLoaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false,
      fetching: false,
    };
  }

  load = () => {
    const { getData } = this.props;
    this.setState({ fetching: true });
    getData()
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ fetching: false }));
  };

  componentDidMount() {
    this.load();
  }

  render() {
    const { fetching, data, error } = this.state;
    const { render } = this.props;
    if (fetching) {
      return <div>LOADING.....</div>;
    }
    if (error) {
      return <div>ERROR!!!!!</div>;
    }
    return render(this.state);
  }
}
