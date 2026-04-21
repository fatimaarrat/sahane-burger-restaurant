import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"; // المكتبة الجديدة
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { useCart } from "../../Context/CartContext";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 50 ? setNav(true) : setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  const isSticky = nav || location.pathname !== "/";

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={isSticky ? "sticky" : ""}
      >
        <Container>
          <Navbar.Brand as={NavHashLink} smooth to="/#homeS">
            <img src={Logo} alt="Şahane Burger Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavHashLink} smooth to="/#homeS">
                ANA SAYFA
              </Nav.Link>

              <Nav.Link as={NavHashLink} smooth to="/#about">
                HAKKIMIZDA
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth to="/#menu">
                MENÜ
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth to="/#shop">
                MAĞAZA
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth to="/#blog">
                BLOG
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth to="/#Contact">
                İLETİŞİM
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{cartItems.length}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
