import React, { Component , Fragment} from "react";
import "./Drawer.css";
import BackDrop from '../../Ui/Backdrop/Backdrop.jsx'

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => <li key={index}> <a>Link : {link}</a></li>);
  };

  render() {
    const cls = ['drawer']

    if(!this.props.isOpen){
      cls.push('close')
    }

    return (
      <Fragment>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
       {this.props.isOpen && <BackDrop isClose={this.props.isClose}/>}
      </Fragment>
    );
  }
}

export default Drawer;
