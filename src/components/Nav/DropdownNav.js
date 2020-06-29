import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, Nav, NavItem, NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const PortfolioNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Nav>
          <DropdownToggle caret>
            <NavItem><NavLink to="/portfolio" tag={RRNavLink} onClick={toggle}>Portfolio</NavLink></NavItem>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink to="/portfolio/weddings" tag={RRNavLink} onClick={toggle}>
                Weddings
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Nav>
      </Dropdown>
    </Navbar>
  );
};

export default PortfolioNav;
