import React from 'react';
import {
    Nav, 
    NavLink, 
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/find" activeStyle>
                    Find a Bank
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to="/report" activeStyle>
                    Report Bug
                </NavLink>
            </NavMenu>
            

        </Nav>
    </>
  );
};

export default Navbar;