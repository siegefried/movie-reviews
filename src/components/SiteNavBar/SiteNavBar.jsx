import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteNavBar = () => {
    return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/movies">Movies</Link></Nav.Link>
            <Nav.Link><Link to="/reviews">Reviews</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}

export default SiteNavBar;