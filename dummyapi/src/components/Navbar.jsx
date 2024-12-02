import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/darazlogo.png'
import './navbar.css'


export const Navsection = () => {
  return (
    <>
    <Navbar expand="lg" className='Navbar'>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Products">Products</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>

         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
    
  )
}
