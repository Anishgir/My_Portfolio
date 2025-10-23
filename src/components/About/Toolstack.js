import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJest,
  SiPostman,
  SiRedux,
  SiWebpack,
  SiVisualstudiocode,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <SiJest />
        <p style={{ fontSize: "0.3em" }}>Jest</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.3em" }}>VsCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "0.3em" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{ fontSize: "0.3em" }}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <p style={{ fontSize: "0.3em" }}>Webpack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{ fontSize: "0.3em" }}>Git</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
