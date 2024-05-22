// import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

export function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">WatchWander</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className={({isActive})=>{return isActive ? "text-info nav-link rounded-1" : "nav-link"}} to={"/"}>Home</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "text-info nav-link rounded-1" : "nav-link"}} to={"/about"}>About</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "text-info nav-link rounded-1" : "nav-link"}} to={"/books"}>Books</NavLink>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

