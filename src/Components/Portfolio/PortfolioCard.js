import React from "react";
import { Card } from "react-bootstrap";

const PortfolioCard = (props) => {
  return (
    <div>
      <Card className="portfolio-card">
        <img src={props.image} alt="" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioCard;
