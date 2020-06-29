import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,
} from 'reactstrap';

const CollapsableNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem><NavLink to="/" exact activeClassName="active" tag={RRNavLink} onClick={toggleNavbar}>Home</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CollapsableNav;
