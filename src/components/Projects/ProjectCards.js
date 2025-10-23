import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={props.style} />
      <Card.Body>
      <Card.Title className="fw-bold" style={{ fontSize: "1.1em", marginBottom: "20px" }}>
  <div style={{ color: "#ffffff" }}>{props.title}</div>
  <div style={{ fontSize: "0.9em", color: "#bbbbbb", fontWeight: "500" }}>
  <div style={{  marginTop:"5px" }}>   {props.subTitle}</div>
            <div style={{ marginTop:"4px" }}>            {props.date}</div>

          </div>
</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
