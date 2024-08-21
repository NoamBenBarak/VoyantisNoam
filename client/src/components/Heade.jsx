import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                <img
                    src="https://comeet-euw-app.s3.amazonaws.com/1675/0109b3c917c63cff7e12fba25b98a6afeb7c5644"
                    alt="Voyantis Logo"
                    height="80"
                    className="d-inline-block align-top"
                    />
                {' '}
                Voyantis
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;