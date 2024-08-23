import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaEnvelope, FaRegFileAlt, FaCommentDots } from "react-icons/fa";

const ContactUs = () => {
  // Replace this URL with the direct link to your image
  const imageUrl = "https://tse2.mm.bing.net/th?id=OIP.Y1kGu3EIZu_THVb4i1OuigHaEo&pid=Api&P=0&h=180";

  return (
    <Container fluid className="p-0">
      {/* Background Image Section with Gradient Overlay */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1>Contact Us</h1>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg">
              <Card.Body>
                <p className="text-center mb-4">
                  Have a question, feedback, or want to know more about our pizzas?
                  Fill out the form below, and we’ll get back to you as soon as possible!
                </p>

                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>
                      <FaUser className="me-2" /> Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="fade-in"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Label>
                      <FaEnvelope className="me-2" /> Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="fade-in"
                    />
                  </Form.Group>

                  <Form.Group controlId="formSubject" className="mt-3">
                    <Form.Label>
                      <FaRegFileAlt className="me-2" /> Subject
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      required
                      className="fade-in"
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mt-3">
                    <Form.Label>
                      <FaCommentDots className="me-2" /> Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your message here..."
                      required
                      className="fade-in"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-4 w-100"
                    style={{
                      backgroundColor: "#FF6347", // Tomato color
                      borderColor: "#FF6347",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#ff7f50")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#FF6347")
                    }
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactUs;
