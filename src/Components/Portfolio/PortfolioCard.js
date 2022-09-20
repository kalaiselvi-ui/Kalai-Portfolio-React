import React from "react";
import { Card } from "react-bootstrap";

const PortfolioCard = (props) => {
  return (
    <div>
      <Card className="portfolio-card">
        <a href={props.link} target="_blank">
          <img src={props.image} alt="" />
        </a>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.technology}</Card.Text>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioCard;
