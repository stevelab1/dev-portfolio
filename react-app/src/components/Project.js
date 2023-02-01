import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardLink } from 'react-bootstrap';

const Project = ({ title, deployedLink, githubLink, screenshot }) => {
    return (
        <Card className="orange-card">
            <CardImg src={screenshot} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>
                    <CardLink href={deployedLink}>Deployed Version</CardLink>
                    <CardLink href={githubLink}>GitHub Repository</CardLink>
                </CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default Project;
