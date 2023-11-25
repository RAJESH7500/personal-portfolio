import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import appBroda from "../../Assets/Experiences/appbroda.png";
import byjus from "../../Assets/Experiences/byjus.png";
const Experience = (props) => {
  const arr1 = [
    "Working as a MERN stack developer, to help app developers to monetize their apps.",
    "Designed & implemented the client's onboarding flow by automating the agreement signing flow through ZOHO documents signing API.",
    "Created a bulk ad unit creation modal, to create 1 - 1000 ad units at a time using react virtualized rendering.",
    "Added a bulk upload feature which reduced the manual work of adding ad units in the ad unit bulk creation modal.",
    "Added a bulk upload feature which reduced the manual work of adding ad units in the ad unit bulk creation modal.",
    "Set up the new Relational database server Postgresql using AWS RDS instance.",
    "Implemented the Python script and deployed it as a cronjob on EC2 to fetch the app reports data from Google Ad Manager and feed it to the Postgresql server daily.",
    "Designed and implemented an activity tab in the dashboard to track the activities of teams or clients.",
  ];
  const arr2 = [
    "Developed and maintained responsive web applications using React.js.",
    "Collaborated with the UI/UX designer team to implement user-friendly interfaces.",
    "Integrated the RESTful APIs to fetch and display dynamic data in real-time.",
    "Conducted code reviews and provided constructive feedback to team members.",
    "Improved the website loading time through code optimisation and lazy loading.",
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experiences </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ExperienceCard
              logo={appBroda}
              title="AppBroda"
              subtitle="Software Engineer"
              duration="November 2022 - Current"
              techStaks="JavaScript, Python, Node.js, React.js, Express.js, MongoDB, PostgreSQL, GIT, AWS"
              work={arr1}
            />
          </Col>

          <Col md={6} className="project-card">
            <ExperienceCard
              logo={byjus}
              title="BYJU'S"
              subtitle="Software Engineer"
              duration="June 2022 - November 2022"
              techStaks="JavaScript, Node.js, React.js, "
              work={arr2}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
