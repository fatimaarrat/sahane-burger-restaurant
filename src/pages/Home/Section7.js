import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section" id="Contact">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>30 Dakİka İçİnde</h4>
            <h2>Teslİmatı Garantİ Edİyoruz!</h2>
            <p>
              Hızlı teslimat، şahane lezzet! Siparişiniz yola çıktığı 
              andan itibaren 30 dakika içinde teslimat garantisi veriyoruz. Taze ve sıcak burgerin adresi.
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 0536 445 78 22
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
