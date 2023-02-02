import React from 'react';
import Card from 'react-bootstrap/Card';

const Project = (props) => {
    return (
        <Card className="bg-dark text-white border">
            <Card.Img 
            variant="top" src={props.screenshot} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>
                    <Card.Link href={props.deployedLink}>Deployed Version</Card.Link>
                    <Card.Link href={props.githubLink}>GitHub Repository</Card.Link>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default Project;
