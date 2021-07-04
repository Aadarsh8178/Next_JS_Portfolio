import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { GridContainer, ViewAll } from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const [projectsToMap, setProjectsToMap] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    let projectsToMap = [];
    if (viewAll) projectsToMap = projects;
    else projectsToMap = projects.slice(0, 4);
    setProjectsToMap(projectsToMap);
  }, [viewAll]);
  return (
    <Section nopadding id="projects" className="mt-5">
      <br />
      <br />
      <SectionDivider divider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer className="d-flex flex-wrap">
        {projectsToMap.map((p, i) => {
          return (
            <div
              key={i}
              className="col-12 col-md-6"
              style={{ margin: "4rem 0" }}
            >
              <ProjectCard p={p} />
            </div>
          );
        })}
        <ViewAll className="col-12">
          <span className="text-end" onClick={() => setViewAll((p) => !p)}>
            {viewAll ? "View less" : "View All"}
          </span>
        </ViewAll>
      </GridContainer>
    </Section>
  );
};

export default Projects;
