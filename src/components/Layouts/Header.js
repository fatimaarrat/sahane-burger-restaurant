import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { useCart } from "../../Context/CartContext";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation(); // لمعرفة الصفحة الحالية

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 50 ? setNav(true) : setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  // دالة لمساعدتنا في تحديد متى يجب أن يكون الهيدر ملوناً (Sticky)
  // يكون ملوناً إذا نزلنا بالسكرول، أو إذا كنا في أي صفحة غير الرئيسية (مثل السلة)
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
          <Navbar.Brand as={Link} to="/#homeS">
            <img src={Logo} alt="Şahane Burger Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/#homeS">ANA SAYFA</Nav.Link>
              
              {/* إذا كنا في صفحة السلة، نضع الرابط كاملاً ليعود للرئيسية ثم ينزل للسيكشن */}
              <Nav.Link href="/#about">HAKKIMIZDA</Nav.Link>
              <Nav.Link href="/#menu">MENÜ</Nav.Link>
              <Nav.Link href="/#shop">MAĞAZA</Nav.Link>
              <Nav.Link href="/#blog">BLOG</Nav.Link>
              <Nav.Link href="/#Contact">İLETİŞİM</Nav.Link>

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