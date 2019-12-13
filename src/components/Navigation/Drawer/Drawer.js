import React, { Component, Fragment } from "react";
import "./Drawer.css";
import BackDrop from "../../Ui/Backdrop/Backdrop.jsx";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
  renderLinks = links => {
    return links.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          onClick={this.props.isClose}
          activeClassName="active"
        >
          {link.label}
        </NavLink>
      </li>
    ));
  };

  render() {
    const cls = ["drawer"];

    if (!this.props.isOpen) {
      cls.push("close");
    }

    const links = [
      { to: "/", label: "Список", exact: true },
    ];

    if (this.props.isAuthentificated) {
      links.push({ to: "/quiz-creator", label: "Создать тест", exact: false });
      links.push({ to: "/logout", label: "Выйти", exact: false });
    } else {
      links.push({ to: "/auth", label: "Авторизация", exact: false });
    }

    return (
      <Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen && <BackDrop isClose={this.props.isClose} />}
      </Fragment>
    );
  }
}

export default Drawer;
