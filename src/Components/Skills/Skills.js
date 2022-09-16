import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import data from "./SkillsData";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

const Skills = (value) => {
  return (
    <div className="skills container mt-4">
      <div className="skill-title">
        <h3>My SKills</h3>
        <span>CHECK OUT MY SKILLSET </span>
      </div>
      <div className="skill-menu">
        <Row>
          {data.map((value, index) => {
            const { image, percent, title } = value;
            return (
              <Col md={6}>
                <div className="skill-list" key={index}>
                  <img src={image} alt="" />
                  <span>{title}</span>
                  <ProgressBar
                    animated
                    variant="custom"
                    now={percent}
                    label={`${percent}%`}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
