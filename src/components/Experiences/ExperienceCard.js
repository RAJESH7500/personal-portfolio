import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const ExperienceCard = ({
  logo,
  title,
  subtitle,
  duration,
  work,
  techStaks,
}) => {
  const [showMore, setShowMore] = useState(() =>
    title === "BYJU'S" ? work.length : 3
  );
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={logo}
        alt="card-img"
        style={{ width: '100%', height: 300 }}
      />
      <hr style={{ height: '3px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <span className="text-muted   float-right">{duration}</span>
        </div>

        <Card.Text style={{ textAlign: 'justify' }}>
          <p>
            <b>Tech Stack:</b> {techStaks}
          </p>
          <ul style={{ height: '300px', overflowY: 'auto' }}>
            {work?.slice(0, showMore)?.map((myWork, index) => (
              <li key={index}>{myWork}</li>
            ))}
          </ul>
          {work?.length > 3 && title !== "BYJU'S" && (
            <div style={{ position: 'relative', padding: '20px' }}>
              <button
                style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '10px',
                  border: 'none',
                  background: 'none',
                  color: '#fff',
                }}
                onClick={() => setShowMore(showMore === 3 ? work.length : 3)}
              >
                {showMore === 3 ? 'Read More' : 'Read Less'}
              </button>
            </div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
