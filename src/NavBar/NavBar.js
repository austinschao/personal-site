import { Navbar, Collapse, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from "reactstrap";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div>
      <Navbar className="navbar-navbar" color="light" expand="md" light>
        <NavbarBrand>Austin's Personal Website</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default NavBar;