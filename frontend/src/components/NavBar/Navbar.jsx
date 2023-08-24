import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DameLaPata</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/dogs">SOBRE NOSOTROS</Nav.Link>
            <NavDropdown title="ADOPTÁ" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dogs">Ver todos</NavDropdown.Item>
              <NavDropdown.Item href="/pinder">Vista detallada</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/post">PUBLICÁ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
