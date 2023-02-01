import React from 'react';
import { Card, CardImg } from 'react-bootstrap';

const Project = ({ title, deployedLink, githubLink, screenshot }) => {
    return (
        <Card className="orange-card">
            <CardImg src={screenshot} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>
                    <Card.Link href={deployedLink}>Deployed Version</Card.Link>
                    <Card.Link href={githubLink}>GitHub Repository</Card.Link>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default Project;
