import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row>
          {/* Home Section */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Home</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
            </ul>
          </Col>

          {/* About Section */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/About" className="text-white">
                  About Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/Contact" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-light my-4" />

        <div className="text-center">
          <p className="mb-0">&copy; 2024 Slice of Paradise, Inc</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
