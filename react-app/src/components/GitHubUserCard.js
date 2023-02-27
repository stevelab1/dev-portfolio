import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";

const UserCard = ({ username, clientId, clientSecret }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let address = `https://api.github.com/users/${username}`;
        if (clientId && clientSecret) {
          address += `?client_id=${clientId}&client_secret=${clientSecret}`;
        }
        const response = await fetch(address);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchUser();
  }, [username, clientId, clientSecret]);

  return (
    <a
      href={user?.html_url}
      target="_blank"
      rel="noopener noreferrer"
      alt="link to stevelab1 github profile"
    >
      <Card className="mt-3" style={{ width: "100" }}>
        <Card.Img variant="top" src={user?.avatar_url} />
        <Card.Body>
          {user ? (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <div className="m-0">
                  <Card.Title className="m-2">{user.name}</Card.Title>
                  <Card.Subtitle className="text-muted mb-1">
                    @{username}
                  </Card.Subtitle>
                  {/* <Card.Text className="mt-1 text-muted">
                    {user.bio || "No bio available"}
                  </Card.Text> */}
                  {/* <Button variant="outline-secondary" href={user.html_url}>Follow
                  </Button> */}
                </div>
                <div className="d-flex flex-column text-muted m-0">
                  {/* <span>
                    <strong>{user.followers}</strong> Followers
                  </span> */}
                  <span>
                    <strong>{user.public_repos}</strong> Repos{" "}
                    <Badge pill className="github-badge align-middle mb-1">
                      Public
                    </Badge>
                  </span>
                  {/* <span>
                    <strong>{user.following}</strong> Following
                  </span> */}
                </div>
              </div>
            </>
          ) : (
            <Card.Body>Loading user...</Card.Body>
          )}
        </Card.Body>
        <Card.Body className="d-flex justify-content-center mb-0">
          <img
            src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=stevelab1&line_height=40"
            alt="github languages used"
          />
        </Card.Body>
        <Card.Body className="d-flex justify-content-center">
          <img
            src="https://github-readme-stats.vercel.app/api?username=stevelab1"
            alt="GitHub stats"
            style={{ maxWidth: "100%" }}
          />
        </Card.Body>
      </Card>
    </a>
  );
};

export default UserCard;
