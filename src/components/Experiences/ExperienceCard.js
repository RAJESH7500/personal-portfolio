import React from "react";
import Card from "react-bootstrap/Card";

const ExperienceCard = ({
  logo,
  title,
  subtitle,
  duration,
  work,
  techStaks,
}) => {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={logo}
        alt="card-img"
        style={{ width: "100%", height: 300 }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <span className="text-muted   float-right">{duration}</span>
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          <p>
            <b>Tech Stack:</b> {techStaks}
          </p>
          <ul>
            {work.map((myWork, index) => (
              <li key={index}>{myWork}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
