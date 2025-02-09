import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExperienceCard from './ExperienceCard';
import Particle from '../Particle';
import timesnow from '../../Assets/Experiences/timesnow.png';
import appBroda from '../../Assets/Experiences/appbroda.png';
import byjus from '../../Assets/Experiences/byjus.png';
const Experience = (props) => {
  const work1 = [
    'Developed and maintained full-stack applications using Node.js, React.js, and JavaScript, ensuring seamless user experiences across platforms.',
    'Implemented both server side rendering (SSR) and client side rendering (CSR) to enhance user experience and SEO performance.',
    'Conducated compressive code refactoring to improve page speed and optimise application performance',
    'Collaborated with cross-functional teams to design and implement new features and functionalities',
    'Conducted unit testing and debugging to ensure high-quality code and application stability',
    'Desingned and implemented the backend APIs to fetch the vehicles data based on the multiple filter values',
    'Imporved the websites core web vitals such as LCP, CLS & TBT improve the SEO score and fast page load',
    'Implemented pagination to enhance data navigation and improve user experience, optimizing performance for large datasets',
  ];
  const work2 = [
    'Worked as a MERN stack developer, to help app developers to monetize their apps.',
    'Developed and implemented the backend APIs to create the adunits in the google admanager',
    "Designed & implemented the client's onboarding flow by automating the agreement signing flow through ZOHO documents signing API.",
    'Created a bulk ad unit creation modal, to create 1 - 1000 ad units at a time using react virtualized rendering.',
    'Added a bulk upload feature which reduced the manual work of adding ad units in the ad unit bulk creation modal.',
    'Added a bulk upload feature which reduced the manual work of adding ad units in the ad unit bulk creation modal.',
    'Set up the new Relational database server Postgresql using AWS RDS instance.',
    'Implemented the Python script and deployed it as a cronjob on EC2 to fetch the app reports data from Google Ad Manager and feed it to the Postgresql server daily.',
    'Designed and implemented an activity tab in the dashboard to track the activities of teams or clients.',
  ];
  const work3 = [
    'Developed and maintained responsive web applications using React.js.',
    'Collaborated with the UI/UX designer team to implement user-friendly interfaces.',
    'Integrated the RESTful APIs to fetch and display dynamic data in real-time.',
    'Conducted code reviews and provided constructive feedback to team members.',
    'Improved the website loading time through code optimisation and lazy loading.',
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experiences </strong>
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              logo={timesnow}
              title="Times Network"
              subtitle="Software Engineer"
              duration="February 2024 - Current"
              techStaks="JavaScript, Python, Node.js, React.js, Express.js, MongoDB, PostgreSQL, GIT, AWS"
              work={work1}
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              logo={appBroda}
              title="AppBroda"
              subtitle="Software Engineer"
              duration="November 2022 - February 2024"
              techStaks="JavaScript, Python, Node.js, React.js, Express.js, MongoDB, PostgreSQL, GIT, AWS"
              work={work2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              logo={byjus}
              title="BYJU'S"
              subtitle="Software Engineer"
              duration="June 2022 - November 2022"
              techStaks="JavaScript, Node.js, React.js, "
              work={work3}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
