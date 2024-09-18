import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const pizzaImages = [
  {
    src: 'https://lilluna.com/wp-content/uploads/2020/12/margherita-pizza-resize-3.jpg',
    title: 'Margherita Pizza',
    description: 'Classic cheese and tomato.',
  },
  {
    src: 'https://th.bing.com/th/id/OIP._Tuj6ElUF8jhhcSg41_V_QHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Pepperoni Pizza',
    description: 'Spicy pepperoni with gooey cheese.',
  },
  {
    src: 'https://tse3.mm.bing.net/th?id=OIP.RyF12CjDGrG3YngqLLEc2gHaHa&pid=Api&P=0&h=180',
    title: 'Veggie Pizza',
    description: 'Loaded with fresh vegetables.',
  },
  {
    src: 'https://tse4.mm.bing.net/th?id=OIP.7ap_ux-IRoueP9OR1ou5QgHaKX&pid=Api&P=0&h=180',
    title: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, BBQ sauce, red onions, and cilantro.',
  },
  {
    src: 'https://tse2.mm.bing.net/th?id=OIP.eG4Y7DlVnM8rB4gmEPu_pgHaE8&pid=Api&P=0&h=180',
    title: 'Four Cheese Pizza',
    description: 'A blend of mozzarella, cheddar, parmesan, and blue cheese.',
  },
  {
    src: 'https://tse3.mm.bing.net/th?id=OIP.fe50rxvAAhpsPxH5bj867QHaHa&pid=Api&P=0&h=180',
    title: 'Hawaiian Pizza',
    description: 'Ham, pineapple, and extra cheese for a sweet and savory combo.',
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="position-relative">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.HLopOdJBFLImS4f7wGjOZAHaEo&pid=Api&P=0&h=180"
          alt="Pizza"
          className="img-fluid w-100"
          style={{ height: '70vh', objectFit: 'cover' }}
        />
        <div
          className="position-absolute text-center text-white font-weight-bold w-100"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '0 20px',
          }}
        >
          <p className="lead">
            "In every crispy crust, a story is told. In every melted cheese, a memory unfolds. Taste the love baked into every slice."
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.Wryt7qYmlhgJ6s8LytSRiAHaE7&pid=Api&P=0&h=180"
              alt="Pizza"
              className="img-fluid rounded mb-4 mb-md-0"
              style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="font-weight-bold p-3">
              "At Slice of Paradise, every pizza is a masterpiece. We start with a perfect crust, add our rich, homemade sauce, and top it with the finest, freshest ingredients. From classic favorites to unique creations, our pizzas are crafted to deliver unforgettable flavor and joy with every bite. Dive into a world of deliciousness and let us make your pizza dreams come true."
            </p>
          </Col>
        </Row>
      </Container>

      {/* Pizza Gallery Section */}
      <Container className="text-center mb-5">
        <h1 className="text-center mb-4">Pizza Gallery</h1>
        <Row>
          {pizzaImages.map((pizza, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={pizza.src} alt={pizza.title} className="mt-4" style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{pizza.title}</Card.Title>
                  <Card.Text>{pizza.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
