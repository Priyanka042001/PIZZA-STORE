import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const [pizzaImages, setPizzaImages] = useState([]);
  const navigate = useNavigate();

  const fetchPizzas = () => {
    axios.get('http://localhost:5000/Pizzas')
      .then(response => {
        setPizzaImages(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/Pizzas/${id}`)
      .then(() => {
        fetchPizzas();
      }).catch(error => {
        console.log('There was an error for deleting the Pizzas', error);
      })
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

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
          <Col xs={12} md={6}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.Wryt7qYmlhgJ6s8LytSRiAHaE7&pid=Api&P=0&h=180"
              alt="Pizza"
              className="img-fluid rounded mb-4 mb-md-0"
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
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
        <h1 className='text-center mb-4'>Pizza Gallery</h1>
        <button onClick={() => navigate('/addpizza')} className="btn btn-sm btn-outline-secondary mb-4">
          Add New Pizza
        </button>
        <Row>
          {pizzaImages.map((pizza, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={pizza.src} alt={pizza.title} className="mt-4" style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{pizza.title}</Card.Title>
                  <Card.Text>{pizza.description}</Card.Text>
                  <button type="button" className="btn btn-sm btn-outline-secondary mr-2" onClick={() => handleDelete(pizza.id)}>Delete</button>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => navigate(`/UpdatePizza/${pizza.id}`)}>Update</button>
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
