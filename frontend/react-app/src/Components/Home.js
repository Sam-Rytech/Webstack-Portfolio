import React from "react";
import './Home.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Home() {
  return (
    <div className="home">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" id="brandname">BEEDO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              classname="me-auto my-2 my-lg-0"
              id="navbarScroll"
              navbarScroll
            >
              <div id="navDropDown">
              <NavDropdown title="Locations" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Lagos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Abuja</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Port Harcourt</NavDropdown.Item>
              </NavDropdown>
              </div>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <body>
      </body>
    </div>
)}

export default Home;