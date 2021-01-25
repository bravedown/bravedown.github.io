import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

function Header() {

  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">David Brown</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;