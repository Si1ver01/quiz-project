import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { logout } from "../../store/actions/auth";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect></Redirect>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(null,mapDispatchToProps)(Logout);
