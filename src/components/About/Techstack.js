import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiReact,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiTypescript,
  SiBootstrap
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p style={{ fontSize: "0.3em" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.3em" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <p style={{ fontSize: "0.3em" }}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: "0.3em" }}>Tailwind css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "0.3em" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{ fontSize: "0.3em" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "0.3em" }}>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{ fontSize: "0.3em" }}>Bootstrap</p>
      </Col>
    </Row>
  );
}

export default Techstack;
