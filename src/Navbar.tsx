import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

/**
 * NavBar
 * props: none
 * state: none
 * routes to ===> LandingPage, NewMessageForm, NewUserForm
 */
function NavBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Nav className="mr-auto">
                    <NavLink exact to="/" className="nav-link navbar-brand">Apollo Messagely</NavLink>
                    <NavLink exact to="/users/new" className="nav-link">New User</NavLink>
                    <NavLink exact to="/messages/new" className="nav-link">New Message</NavLink>
                </Nav>
            </Navbar>
        </div >)
}

export default NavBar;