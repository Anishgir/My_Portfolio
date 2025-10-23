import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import about from "../../Assets/about.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Professional Journey</h1>
        <p style={{ color: "white" }}>
          "Transforming ideas into digital reality, one project at a time"
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              date="( Jan 2022 - June 2022 )"
              isBlog={false}
              subTitle="Tekion Corp"
              title="Software Engineer Intern"
              description="Developed a customized forms tool for Dealer Onboarding using React Drag and Drop which replaced a
third-party solution and reduced operational costs by 80%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              date="( June 2022 - Jan 2024 )"
              isBlog={false}
              subTitle="Tekion Corp"
              title="Associate Software Engineer"
              description="Engineered Configurable UI framework enabling dynamic screen rendering across multiple programs using a single
codebase improving system flexibility and enhancing user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={about}
              date="( Jan 2024 - Present )"
              isBlog={false}
              subTitle="Tekion Corp"
              title="Software Engineer"
              description="Integrated Module Federation to the accounting module, enabling dynamic code sharing and integration across
microfrontends. This improved scalability and reduced redundancy by loading only the required components."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
