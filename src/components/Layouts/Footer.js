import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>ADRESİMİZ </h5>
                <p>Akşemsettin, Fevzi Paşa Cd</p>
                <p> No:24, 34080 Fatih</p>
                <p>İstanbul/Türkiye</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>​ÇALIŞMA SAATLERİ</h5>
                <p>​Pazartesi - Cuma: 09:00 - 22:00</p>
                <p>​Cumartesi: 10:00 - 20:30</p>
                <p>​Pazar: 12:00 - 17:00</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>​HEMEN SİPARİŞ VER</h5>
                <p>​En sevdiğiniz lezzetler, bir telefonla kapınıza kadar geliyor</p>
                <p>
                  <Link to="tel:0536 445 78 22" className="calling">
                    0536 445 78 22
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>​BİZİ TAKİP EDİN</h5>
                <p>Yeni kampanyalar ve özel indirimler için bizi takipte kalın.</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      © 2026 <span>ŞAHANE BURGER</span>. Tüm Hakları Saklıdır 
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link to="/"> Kullanım Şartları</Link>
                  </li>
                  <li>
                    <Link to="/">Gizlilik Politikası</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
