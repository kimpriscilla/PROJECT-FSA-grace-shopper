import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DataPortal extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.users);
    return (
      <>
        <h3>Data Portal</h3>
      </>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DataPortal);
