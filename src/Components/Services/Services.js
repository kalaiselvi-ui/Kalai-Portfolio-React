import React from "react";
import "./Services.css";
import data from "./ServicesData";
import ServicesCard from "./ServicesCard";
import { Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="heading">
            <h2>What I Do</h2>
            <span>THESE ARE MY SERVICES</span>
          </div>
          <div className="services-card">
            <Row>
              {data.map((val, index) => {
                return (
                  <Col md={4} sm={12}>
                    <ServicesCard
                      key={index}
                      image={val.image}
                      title={val.title}
                      desc={val.desc}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
