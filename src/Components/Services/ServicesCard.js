import React from "react";
import { Card } from "react-bootstrap";

const ServicesCard = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <img src={props.image} alt="" />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          {/* <i className="fas fa-arrow-right"></i> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ServicesCard;
