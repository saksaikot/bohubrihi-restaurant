import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import Sticky from "react-sticky-el";
export default class NavBar extends Component {
  // const [collapsed, setCollapsed] = useState(true);

  state = { collapsed: false };
  toggleNavbar = () => this.setState({ collapsed: !this.state.collapsed });
  render() {
    return (
      <Sticky style={{ zIndex: "111" }}>
        <Navbar color="dark" dark expand="sm">
          <div className="container">
            <NavLink to="/" exact className="navbar-brand">
              BohuBrihi Restaurant
            </NavLink>
            <NavbarToggler onClick={this.toggleNavbar} className="me-2" />
            <Collapse isOpen={this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" exact className="nav-link">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" className="nav-link">
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </Sticky>
    );
  }
}
