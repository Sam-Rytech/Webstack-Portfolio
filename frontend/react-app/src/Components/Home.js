import React from "react";
import './Home.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import helpMoving from '../Images/helpMoving.png';
import heavyLifting from '../Images/heavyLifting.jpeg';
import barber from '../Images/barber.jpg';
import electricalHelp from '../Images/electricalHelp.jpeg';
import catering from '../Images/catering.jpeg';
import photographer from '../Images/photographer.jpg';
import madeEasy from '../Images/madeEasy.jpeg';


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
      <section className="section2">
        <div className="popular">
          <p><strong> Popular projects in your area </strong></p>
        </div>
        <div className="photo-container">
          <div className="photo-box">
            <img
              src={helpMoving}
              alt="helpMoving"
              className="photo"
              />
            <div className="photo-text-box">
              <p className="photo-text">Help Moving</p>
            </div>
          </div>
          <div className="photo-box">
            <img
              src={heavyLifting}
              alt="heavyLifting"
              className="photo"
              />
              <div className="photo-text-box">
              <p className="photo-text">Heavy lifting</p>
            </div>
          </div>
          <div className="photo-box">
            <img
              src={barber}
              alt="barber"
              className="photo"
              />
              <div className="photo-text-box">
              <p className="photo-text">Barber</p>
            </div>
          </div>
          <div className="photo-box">
            <img
              src={electricalHelp}
              alt="electricalHelp"
              className="photo"
              />
              <div className="photo-text-box">
              <p className="photo-text">Electrical help</p>
            </div>
          </div>
          <div className="photo-box">
            <img
              src={catering}
              alt="catering"
              className="photo"
              />
              <div className="photo-text-box">
              <p className="photo-text">Catering</p>
            </div>
          </div>
          <div className="photo-box">
            <img
              src={photographer}
              alt="photographer"
              className="photo"
              />
              <div className="photo-text-box">
              <p className="photo-text">photographer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="s3-firsthalf">
          <div className="s3-d1-text-box">
            <h2 className="s3-d1-text-title">Everyday life made easy</h2>
            <p className="s3-d1-text">
            When life gets busy, you don't have to tackle it alone. Get time back
            for what you love by booking help from Beedo with the click of a button.
            </p>
            <ul className="s3-d1-list">
              <li className="s3-d1-list-item">Choose your Beedoer by reviews, skills, and price</li>
              <li className="s3-d1-list-item">Schedule when it works for you — as early as today</li>
              <li className="s3-d1-list-item">Chat with your Beedoer in the app</li>
              <li className="s3-d1-list-item">Pay in the app once the task is completed</li>
            </ul>
          </div>
          <div className="s3-d1-img-box">
            <img
              src={madeEasy}
              alt="madeEasy"
              className="s3-d1-img"
              />
          </div>
        </div>
        <div className="s3-secondhalf"></div>
      </section>
    </div>
)}

export default Home;