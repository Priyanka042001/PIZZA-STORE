import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container container my-5">

      <div className="row justify-content-center mb-5">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg">
            <img 
              src="https://images.creativemarket.com/0.1.0/ps/4992642/1820/1213/m1/fpnw/wm1/sa1ykwpemkrsqyttqo41135tz4sm9nql5azmj5nojrlm3vlwelmutgsu47znuz1m-.jpg?1535971105&s=def039ac34bc97782a9529f2aa93f028" 
              alt="Welcome to Slice of Paradise" 
              className="card-img-top rounded img-fluid" 
            />
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Welcome to Slice of Paradise</h2>
              <p className="card-text">Welcome to Slice of Paradise, where every slice tells a story. Established in 2020, we’ve been serving up delicious, handcrafted pizzas with a focus on fresh ingredients and authentic recipes. Our mission is to bring people together over great food and unforgettable experiences. Our journey began with a dream to bring authentic Italian flavors to our community, and we have stayed true to that vision. Over the years, we have expanded our menu to include a variety of unique and innovative pizza creations, catering to all tastes and preferences.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-lg">
            <img 
              src="https://tse2.mm.bing.net/th?id=OIP.OqcbF5I2_JWnacEO_W5svgHaEK&pid=Api&P=0&h=180" 
              alt="Our Story" 
              className="card-img-top rounded img-fluid" 
            />
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Our Story</h3>
              <p className="card-text">Our journey began with a passion for traditional Italian cooking and a dream to create a place where families and friends could gather and enjoy a taste of Italy. From our humble beginnings in a small kitchen to becoming a neighborhood favorite, Bella’s Pizzeria is a labor of love and a testament to our commitment to quality. What started as a simple idea—to bring the authentic flavors of Italy to our community—has grown into something truly special. In the early days, our founder, driven by a deep love for Italian cuisine, spent countless hours perfecting recipes, experimenting with ingredients, and honing the craft of pizza making.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-lg">
            <img 
              src="https://tse1.mm.bing.net/th?id=OIP.uo03kPPtDW7FJ5DJ4ilYeQHaE7&pid=Api&P=0&h=180" 
              alt="Our Values" 
              className="card-img-top rounded img-fluid" 
            />
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Our Values</h3>
              <p className="card-text">At Slice of Paradise, we believe in using only the freshest, locally-sourced ingredients to create our pizzas. Our dough is made daily from scratch, and our sauces are crafted with care. Every morning, our skilled team begins the day by preparing fresh dough, using a time-honored recipe that has been passed down through generations. This dough is the foundation of our pizzas—light, airy, and with just the right amount of crispiness. It's what sets our pizzas apart and makes every bite a delight.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-lg">
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo&pid=Api&P=0&h=180" 
              alt="Meet the Team" 
              className="card-img-top rounded img-fluid" 
            />
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Meet the Team</h3>
              <p className="card-text">Our team is the heart of Slice of Paradise. Chef Marco, our founder, brings over 20 years of experience in Italian cuisine. Alongside him, our talented chefs and friendly staff work tirelessly to ensure every visit is a memorable one. We’re more than just a restaurant; we’re a family dedicated to serving you. At Slice of Paradise, our team is more than just a group of employees—it’s a passionate, dedicated family that makes every dining experience exceptional. Chef Marco, with his extensive background in Italian cuisine, is the visionary behind our restaurant. His journey began in Italy, where he trained under some of the finest chefs and mastered the art of pizza making.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row  justify-content-center mb-5">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg">
            <img 
              src="https://tse2.mm.bing.net/th?id=OIP.frIl9HXL80cyWRoMQ-uF6AHaE8&pid=Api&P=0&h=180" 
              alt="Why Choose Us" 
              className="card-img-top rounded img-fluid" 
            />
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Why Choose Us?</h3>
              <p className="card-text">What makes Slice of Paradise stand out? It’s our commitment to authenticity and excellence. From our wood-fired oven to our carefully selected ingredients, every detail is crafted to deliver the best pizza experience. Whether you're a pizza aficionado or just looking for a great meal, Slice of Paradise offers a unique blend of tradition and innovation. We take great pride in sourcing only the finest ingredients for our pizzas. Every component, from the rich, tangy tomatoes in our sauces to the premium cheeses and locally-sourced toppings, is chosen with care to ensure the highest quality and flavor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
