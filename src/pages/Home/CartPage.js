import React from "react";
import { Container, Row, Col, Table, Button, Card } from "react-bootstrap";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // حساب المجموع الكلي
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Header />
      <section
        className="py-5"
        style={{ marginTop: "120px", minHeight: "80vh", background: "#f49d07" }}
      >
        <Container>
          <h2
            className="fw-bold mb-5 text-center"
            style={{ fontFamily: "var(--lilita-font)" }}
          >
            SEPETİM 🛒
          </h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h4>Sepetiniz şu an boş.</h4>
              <Link to="/" className="btn btn-warning mt-3 fw-bold">
                MENÜYE DÖN
              </Link>
            </div>
          ) : (
            <Row>
              <Col lg={8}>
                <Table
                  responsive
                  hover
                  className="align-middle shadow-sm border"
                >
                  <thead className="bg-light text-center">
                    <tr>
                      <th>Ürün</th>
                      <th>Fiyat</th>
                      <th>Adet</th>
                      <th>Toplam</th>
                      <th>Sil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image}
                              alt=""
                              style={{
                                width: "60px",
                                borderRadius: "8px",
                                marginRight: "15px",
                              }}
                            />
                            <span className="fw-bold text-uppercase">
                              {item.title}
                            </span>
                          </div>
                        </td>
                        <td className="text-center">{item.price} TL</td>
                        <td>
                          {/* أزرار التحكم بالكمية */}
                          <div className="d-flex align-items-center justify-content-center">
                            <Button
                              variant="outline-dark"
                              size="sm"
                              style={{
                                borderRadius: "50%",
                                width: "28px",
                                height: "28px",
                                padding: "0",
                                lineHeight: "1",
                              }}
                              onClick={() => updateQuantity(item.title, "dec")}
                            >
                              -
                            </Button>
                            <span className="mx-3 fw-bold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline-dark"
                              size="sm"
                              style={{
                                borderRadius: "50%",
                                width: "28px",
                                height: "28px",
                                padding: "0",
                                lineHeight: "1",
                              }}
                              onClick={() => updateQuantity(item.title, "inc")}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="text-center fw-bold">
                          {(item.price * item.quantity).toFixed(2)} TL
                        </td>
                        <td className="text-center">
                          <Button
                            variant="link"
                            className="text-danger p-0"
                            onClick={() => removeFromCart(item.title)}
                          >
                            <i className="bi bi-trash fs-5"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>

              <Col lg={4}>
                <Card className="p-4 shadow-sm border-0 bg-light">
                  <h4
                    className="fw-bold mb-4"
                    style={{ fontFamily: "var(--lilita-font)" }}
                  >
                    SİPARİŞ ÖZETİ
                  </h4>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Toplam Ürün:</span>
                    <span className="fw-bold">{cartItems.length}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="fw-bold">GENEL TOPLAM:</h5>
                    <h5 className="text-danger fw-bold">
                      {totalPrice.toFixed(2)} TL
                    </h5>
                  </div>
                  <Button
                    variant="warning"
                    className="w-100 py-3 fw-bold text-uppercase shadow-sm"
                  >
                    Ödemeye Geç
                  </Button>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
