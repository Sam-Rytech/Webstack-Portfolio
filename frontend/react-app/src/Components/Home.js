import React from "react";
import './Home.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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
          <div id="navDropDown">
            <Nav
              classname="me-auto my-2 my-lg-0"
              id="navbarScroll"
            >
              <div>
              <NavDropdown title="Locations" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Lagos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Abuja</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Port Harcourt</NavDropdown.Item>
              </NavDropdown>
              </div>
            </Nav>
            <Nav
              classname="me-auto my-2 my-lg-0"
              id="navbarScroll"
            >
              <div id="services">
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Mounting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Furniture Assembly</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Home repair</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Cleaning</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Electrical</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Plumbing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Painting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Air Conditioner</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Carpentry</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Help Moving</NavDropdown.Item>
              </NavDropdown>
              </div>
            </Nav>
            <Button variant="outline-success" id="navButton">Login/Sign-up</Button>
            <Button variant="outline-success" id="navButton">Become a Beedoer</Button>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="hero">
        <div className="herocontainer">
          <p className="strongt"><strong>Get help at a reduced cost</strong></p>
          <div className="separation"></div>
          <p className="Just">Just Task</p>
          <input type="text" className="input" placeholder="I need help with ..." />
          <button className="help">Get help today</button>
          <div className="otherjobs">
            <button className="job">Mounting</button>
            <button className="job">Furniture Assembly</button>
            <button className="job">Home repair</button>
            <button className="job">Help Moving</button>
            <button className="job">Cleaning</button>
          </div>
        </div>
      </section>
      <section>
      <div className="album py-5 bg-body-tertiary">
        <p className="popular"><strong> Popular projects in your area </strong></p>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
)}

export default Home;