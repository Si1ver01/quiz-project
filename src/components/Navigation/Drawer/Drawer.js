import React, { Component , Fragment} from "react";
import "./Drawer.css";
import BackDrop from '../../Ui/Backdrop/Backdrop.jsx'
import {NavLink} from 'react-router-dom'

const links = [
  {to: '/' , label : 'Список', exact : true},
  {to: '/auth' , label : 'Авторизация', exact : false},
  {to: '/quiz-creator' , label : 'Создать тест', exact : false},
];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => <li key={index}> 
      <NavLink
        to={link.to}
        exact={link.exact}
        onClick={this.props.isClose}
        activeClassName='active'
      >
        {link.label}
      </NavLink>
    </li>);
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
