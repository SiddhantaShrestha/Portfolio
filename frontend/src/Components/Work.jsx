import "../CSS/ProjectCard.css";
import ProjectCard from "./ProjectCard";
import WorkCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className="ProjectContainer">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((value, i) => {
          return (
            <ProjectCard
              key={i}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
            ></ProjectCard>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
