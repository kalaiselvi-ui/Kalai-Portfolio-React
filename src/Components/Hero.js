import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import profile from "../images/logo-1.jpeg";
import pdf from "../images/Kalais-FD-15D.pdf";
import { Row, Col } from "react-bootstrap";

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
                Hi There! I'm Kalaiselvi Jayachandran. A Software Developer
                having specialization in Frontend & Backend Devlopment. I have
                2+ years of experience in Web Devlopment having strong React &
                Wordpress Woocommerce Skills. I have Backend Skills in Nodejs,
                Mongodb. I also have Frontend Skills in Javascript,Redux, Web
                components Css/Sass & Bootstrap.
              </p>
              <div className="d-flex info-hero">
                <p className="px-3">
                  <i
                    className="fa fa-phone px-2"
                    style={{ color: "black" }}
                  ></i>
                  +971 52 122 4892
                </p>
                <p>
                  <i
                    className="fa fa-envelope px-2"
                    style={{ color: "black" }}
                  ></i>
                  kalaichandran369@gmail.com
                </p>
              </div>
              <div className="hero_btn d-flex">
                <div className="col_1">
                  <h6>FIND WITH ME</h6>
                  <div className="button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/kalaiselvi-j-b6b426177/"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/kalaiselvi-ui"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-github"></i>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={pdf}
                      onclick=""
                    >
                      <button className="btn_shadow px-3">Resume</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="right col-6">
              <div className="right_img">
                {/* <img src={profile} alt="" /> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
