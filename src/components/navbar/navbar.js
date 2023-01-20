import "./navbar.css"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';              
import Logo from "../images/logo-01.png"
import MediaQuery from 'react-responsive'

function App() {
    const mystyle = {
        color: "white",
        backgroundColor: "red",
        padding: "4px",
        fontFamily: "Arial",
        margin: "5px"
      };

      const mystyle2 = {
        color: "red",
        backgroundColor: "white",
        padding: "4px",
        fontFamily: "Arial",
        margin: "5px",
        width:"100px"
      };

      const margin = {
        margin: "5px"
      }

  return (
    <div className="Navbarr">
      <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <div></div>
        <Navbar.Brand href="#"><img src={Logo} alt="company_logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            {/* <Nav.Link href="#action2">categories</Nav.Link> */}
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <MediaQuery minWidth={1824}>
            <Nav.Link href="#"style={mystyle}>
              <b>Sell Here!</b>
            </Nav.Link></MediaQuery>
            <MediaQuery maxWidth={1224}>
            <Nav.Link href="#"style={mystyle2}>
              <b>Sell Here!</b>
            </Nav.Link></MediaQuery>

          </Nav>
          <MediaQuery minWidth={1824}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button id="btn1" variant="outline-success" style = {margin} >Search</Button>
          </Form>
          <Button id="btn1" variant="outline-dark" style = {margin} >Login</Button></MediaQuery>
          <MediaQuery maxWidth={1224}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button id="btn1" variant="outline-success" style = {margin} >Search</Button>
            <Button id="btn1" variant="outline-dark" style = {margin} >Login</Button>
          </Form></MediaQuery>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;
