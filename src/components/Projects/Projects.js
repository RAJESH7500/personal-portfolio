import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodTech from "../../Assets/Projects/food-tech.jpeg";
import devConnector from "../../Assets/Projects/dev-connector.jpeg";
import digitClf from "../../Assets/Projects/digit-clg.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've build so far
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devConnector}
              isBlog={false}
              title="Dev-Connector"
              description="Full Stack web application, build using Node.js, React.js, Express.js and MongoDB, Where Developers can interact with each other. Developers can create or see the other developers posts and able to like or comment on the post as well"
              ghLink="https://github.com/RAJESH7500/Dev-Connector2.0"
              demoLink="https://dev-connector2-0-frontend.onrender.com/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodTech}
              isBlog={false}
              title="Food-Tech"
              description="Restaurant web app build using React.js, Node.js, and bootstrap with custom CSS, that display the information about the restaurant dishes. User can view the dishes and able to write the review about the dish as well"
              ghLink="https://github.com/RAJESH7500/Food-Tech"
              demoLink="https://confusion-3e01c.web.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitClf}
              isBlog={false}
              title="Digits Classifier"
              description="Web application build using html/css and Tensorflow.js. Created the modal using nueral network that classify the hand written digits from 0 to 9. It has canvas to draw the digit and classify it, and also use the web cam to capturea and classify the digit from image."
              ghLink="https://github.com/RAJESH7500/Digit-Classifier"
              demoLink="https://digit-clf.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
