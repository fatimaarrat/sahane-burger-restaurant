import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section" id="homeS">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Sadece</h4>
                  <h4 className="h3_lg">175TL</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">YENİ Burger</h1>
              <h2 className="text-white">Soğanlı</h2>
              <p className="text-white pt-2 pb-4">
                ​Taptaze malzemeler ve ustalıkla hazırlanan 
                karamelize soğanlı yeni burgerimizle lezzet sınırlarını zorluyoruz. 
                Şahane bir tat için hemen sipariş verin
              </p>
              <Link to="/#menu" className="btn order_now">
                ŞİMDİ SİPArİş Ver
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
