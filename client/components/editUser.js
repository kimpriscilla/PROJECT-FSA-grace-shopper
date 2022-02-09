import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import axios from "axios";

class editUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      email: "",
    };
  }

  input(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

const mapState = (state) => state;

export default connect(mapState)(editUser);
