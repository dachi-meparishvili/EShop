import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
        </Nav>
        <Nav.Link to="/Profile" as={NavLink} style={{ marginRight: "40px" }}>
          Profile
        </Nav.Link>
        <Nav.Link to="/cart" as={NavLink}>
          Cart
        </Nav.Link>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
