import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3 containerr">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className="name">
            EShop
          </Nav.Link>
          <input type="text" placeholder="search..." className="searchbar" />
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
