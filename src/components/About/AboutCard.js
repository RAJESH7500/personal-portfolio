import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajesh Kumar </span>
            from <span className="purple"> Firozabad, India.</span>
            <br />
            I am currently employed as a software developer at AppBroda.
            <br />I have completed my <span className="purple">B. Tech. </span>
            from{" "}
            <span className="purple">
              National Institute of Technology, Patna
            </span>{" "}
            in the stream of{" "}
            <span className="purple">
              Eletronics & Communication Engineering
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rajesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
