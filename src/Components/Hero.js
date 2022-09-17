import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../kalai-pic.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container d-flex justify-content-between ">
        <Row>
          <Col md={8}>
            <div className="left">
              <h3>
                Hi, I'm <span>Kalai Jayachandran</span>
              </h3>
              <h2>
                a{" "}
                <span>
                  <Typewriter
                    words={["Frontend Developer. ", "Professional Developer"]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <p className="parah">
                I'm a software Engineer specializing in creating stylish, modern
                websites, web services and online stores for all the industries.
                I have 2+ years experience in Frontend Technology.
              </p>
              <div className="d-flex ">
                <p>+971 52 122 4892</p>
              </div>
              <div className="hero_btn d-flex">
                <div className="col_1">
                  <h6>FIND WITH ME</h6>
                  <div className="button">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/kalaiselvi-j-b6b426177/"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </a>

                    <a target="_blank" href="https://github.com/kalaiselvi-ui">
                      <button className="btn_shadow">
                        <i className="fab fa-github"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="right col-6">
              <div className="right_img">
                <img src={profile} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
