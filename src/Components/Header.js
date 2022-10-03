import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.PNG";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={logo} alt="" className="mx-4" />
          Kalaiselvi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home" className="active-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about">Services</Nav.Link>
            <Nav.Link href="#about">Skills</Nav.Link>
            <Nav.Link href="#about">Portfolio</Nav.Link>
            <Nav.Link href="#about">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
