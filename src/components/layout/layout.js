import React, { Component } from "react";
import "./layout.css";
import ButtonToggle from "../Navigation/ButtonToggle/ButtonToggle.jsx";
import Drawer from "../Navigation/Drawer/Drawer.js";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({ menu: !this.state.menu });
  };
  menuCloseHandler = () => {
    this.setState({ menu: false });
  };

  render() {
    return (
      <div className="layout">
        <Drawer
          isOpen={this.state.menu}
          isClose={this.menuCloseHandler}
          isAuthentificated={this.props.isAuthentificated}
        />

        <ButtonToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthentificated: !!state.auth.token
  };
}

export default connect(mapStateToProps)(Layout);
