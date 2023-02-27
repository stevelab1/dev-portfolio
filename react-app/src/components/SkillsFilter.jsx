import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

const SkillsFilter = ({ skills }) => {
  const location = useLocation();
  const history = useHistory();

  const handleSkillClick = (skill) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("skills", skill);
    history.push(`/projects?${searchParams.toString()}`);
  };
  

  return (
    <div className="pills-container">
      {skills.map((skill, index) => (
        <Button
          key={index}
          className="rounded-pill m-1"
          onClick={() => handleSkillClick(skill)}
          variant={location.search.includes(skill) ? "primary" : "outline-primary"}
        >
          {skill}
        </Button>
      ))}
    </div>
  );
};

export default SkillsFilter;
