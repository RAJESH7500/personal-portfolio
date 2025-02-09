import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards({ title, imgPath, ghLink, description, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt="card-img"
        style={{ height: '300px' }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
        <Button
          variant="primary"
          href={ghLink ? ghLink : '#'}
          target="_blank"
          disabled={ghLink ? false : true}
        >
          <BsGithub /> &nbsp; GitHub
        </Button>
        {'\n'}
        {'\n'}
        <Button
          variant="primary"
          href={demoLink}
          target="_blank"
          style={{ marginLeft: '10px' }}
        >
          <CgWebsite /> &nbsp;
          {'View'}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
