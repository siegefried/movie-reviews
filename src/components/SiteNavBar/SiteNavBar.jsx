import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteNavBar = () => {
    return <>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Watched</Nav.Link>
            <Nav.Link as={Link} to="/moviesearch">Add Movie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}

export default SiteNavBar;