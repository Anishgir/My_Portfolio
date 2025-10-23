import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me1.jpeg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE  MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I’m Anish Gir Gusai, Highly skilled and motivated{" "}
              <strong className="purple"> Frontend Engineer</strong> with a passion for designing
              and implementing robust, scalable and responsive user interfaces
              with experience in developing my skills across various products in
              a fast-paced development environment. Looking for a challenging
              role where I can leverage my experience in{" "}
              <strong className="purple">JavaScript</strong> and <strong className="purple">React</strong> to
              contribute to the development of cutting-edge solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "5%", // for circular crop
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anish-goswami-49a3b7185/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
