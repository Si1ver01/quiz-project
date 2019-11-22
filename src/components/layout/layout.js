import React, { Component } from "react";
import './layout.css';
import ButtonToggle from '../Navigation/ButtonToggle/ButtonToggle.jsx'
import Drawer from '../Navigation/Drawer/Drawer.js'

class Layout extends Component {
  state = {
    menu : false,
  }

toggleMenuHandler = () => {
  this.setState({menu : !this.state.menu})
}
menuCloseHandler = () => {
  this.setState({menu : false})
}

  render() {
    return (
      <div className="layout">
        <Drawer isOpen={this.state.menu} isClose={this.menuCloseHandler}/>

        <ButtonToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu}/>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
