import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Çıtır Tavuk",
    paragraph: "Tavuk göğsü, acı sos, domates, turşu, lahana salatası",
    rating: 5,
    price: 200,
  },
  {
    id: "0002",
    image: Image2,
    title: "Enfes Pastırmalı Sos",
    paragraph: "Ev yapımı köfte, çedar peyniri, pastırma, soğan, hardal",
    rating: 4.5,
    price: 255,
  },
  {
    id: "0003",
    image: Image3,
    title: "Kara Koyun",
    paragraph: "Amerikan peyniri, domates sosu, avokado, marul, kırmızı soğan",
    rating: 4,
    price: 205,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "Ev yapımı köfte, çedar peyniri, pastırma, soğan, hardal",
    rating: 3.5,
    price: 274.99,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 köfte, çedar peyniri, hardal, turşu, domates",
    rating: 3.0,
    price: 350,
  },
  {
    id: "0006",
    image: Image6,
    title: "Hindi Burger",
    paragraph: "Hindi eti, çedar peyniri, soğan, marul, domates, turşu",
    rating: 3,
    price: 305,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "köfte, çedar peyniri, soğan, marul, domates, turşu",
    rating: 2.5,
    price: 195,
  },
  {
    id: "0008",
    image: Image8,
    title: "Klasik Burger",
    paragraph: "çedar peyniri, ketçap, hardal, turşu,domates, soğan",
    rating: 2.0,
    price: 175,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section" id="menu">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>EFSANE BURGERLERİMİZ</h2>
            <p className="para">
              Acıktığınızda aklınıza gelen ilk lezzet! Şahane Burger kalitesiyle hazırlanan efsanevi 
              menümüzü inceleyin ve favorinizi seçin.
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        {/* <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
}

export default Section3;
