import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Şahane Lezzetlerle Paylaşılan Mutlu Anlar</h2>
              <p>
                Gerçek lezzetin paylaştıkça çoğaldığına inanıyoruz. En taze malzemelerle hazırladığımız burgerlerimizle، 
                sevdiklerinizle geçirdiğiniz her anı şahane bir ziyafete dönüştürüyoruz. Dostlarınızla 
                en samimi sohbetlerinize ortak olmaktan mutluluk duyuyoruz.
              </p>
              <ul>
                <li>
                  <p>
                    Özenle seçilmiş %100 yerli besi etler.
                  </p>
                </li>
                <li>
                  <p>Her gün taze pişirilen özel yapım ekmekler.</p>
                </li>
                <li>
                  <p>
                    Şefimizin imza soslarıyla hazırlanan eşsiz tarifler.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
