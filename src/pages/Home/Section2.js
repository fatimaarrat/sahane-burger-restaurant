import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "OrİJİnal Lezzet",
    paragraph: `Özel reçetelerimiz ve gizli baharat karışımlarımızla, başka hiçbir yerde bulamayacağınız gerçek burger deneyimi.`,
  },
  {
    image: Salad,
    title: "Kalİtelİ Malzemeler",
    paragraph: `Etlerimizden sebzelerimize kadar her şeyi günlük ve yerel üreticilerden en taze haliyle seçiyoruz.`,
  },
  {
    image: Delivery,
    title: "En Hızlı Teslİmat",
    paragraph: `Acıktığınızda beklemenize gerek yok! Şahane lezzetleri 30 dakika içinde kapınıza kadar sıcacık ulaştırıyoruz.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section" id="about">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Aİlenİzle Yedİğİnİzde Burgerİn Tadı Bİr Başkadır</h2>
              <p>
                Şahane Burger'de her öğün bir kutlamadır. En taze malzemelerle hazırlanan dev menülerimizle, 
                ailenizle geçireceğiniz her anı unutulmaz bir lezzet şölenine dönüştürüyoruz.
              </p>
              <Link to="/#menu" className="btn order_now btn_red">
                Tüm Menüyü Keşfet
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
