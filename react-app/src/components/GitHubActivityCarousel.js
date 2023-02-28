import React, { useState, useEffect } from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlayCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const GitHubActivityCarousel = ({ username }) => {
  const [activities, setActivities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const url = `https://api.github.com/users/${username}/events/public`;
        const response = await fetch(url);
        const data = await response.json();
        const filteredData = data.filter(
          (activity) => 
            activity.type === "PushEvent" && 
            activity.payload.ref === "refs/heads/main"
        );
        const activityPromises = filteredData
          .slice(0, 6)
          .map(async (activity) => {
            const url = `https://api.github.com/repos/${
              activity.repo.name
            }/commits/${activity.payload.ref.split("/").pop()}`;
            const response = await fetch(url);
            const commitData = await response.json();
            return { activity, commit: commitData };
          });
        const activityData = await Promise.all(activityPromises);
        const flattenedData = activityData
          .flat()
          .sort(
            (a, b) =>
              new Date(b.activity.created_at) - new Date(a.activity.created_at)
          );
        setActivities(flattenedData.slice(0, 6));
      } catch (error) {
        console.error(error.message);
      }
    };
    

    getActivities();
  }, [username]);

  useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        if (activeIndex === activities.length - 1) {
          setActiveIndex(0);
        } else {
          setActiveIndex(activeIndex + 1);
        }
      }, 6000);
    }
    return () => clearInterval(intervalId);
  }, [activeIndex, activities, isPlaying]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextClick = () => {
    if (activeIndex === activities.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(activities.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <Carousel controls={false} activeIndex={activeIndex} interval={null} slide>
      {activities.map(({ activity, commit }, index) => (
        <Carousel.Item key={index}>
          <Card className="shadow-sm border-0 text-light bg-dark">
            <Card.Body className="text-center">
              <Card.Title className="pt-3">
                <code>Here is my latest GitHub activity:</code>
              </Card.Title>
              <a
                href={`https://github.com/${activity.repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="font-weight-bold mt-4 mb-2">
                  {activity.repo.name}
                </h5>
              </a>

              <h6 className="mb-2">
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {commit.commit.message}
                </a>
              </h6>
              <a
                href={commit.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="mb-4 small">
                  {new Date(activity.created_at).toLocaleString()}
                </p>
              </a>
              <Button
                variant="link"
                className="text-light pb-5"
                onClick={handlePrevClick}
                aria-label="Previous"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="fa-2x"
                  style={{ backgroundColor: "transparent" }}
                />
              </Button>
              <Button
                variant="link"
                className="text-light pb-5"
                onClick={handlePlayPauseClick}
                aria-label="Play/Pause"
              >
                <div>
                  {isPlaying ? (
                    <FontAwesomeIcon
                      icon={faPause}
                      className="fa-2x"
                      style={{ backgroundColor: "transparent" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      className="fa-2x"
                      style={{ backgroundColor: "transparent" }}
                    />
                  )}
                </div>
              </Button>

              <Button
                variant="link"
                className="text-light pb-5"
                onClick={handleNextClick}
                aria-label="Next"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="fa-2x"
                  style={{ backgroundColor: "transparent" }}
                />
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default GitHubActivityCarousel;
