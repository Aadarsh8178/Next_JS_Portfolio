import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { GridContainer, ViewAll } from "./ProjectsStyles";
import { Section } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import AnimatedSectionTitle from "../ui/AnimatedSectionTitle";

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
      <AnimatedSectionTitle title="Projects" />
      <GridContainer
        className="d-flex flex-wrap"
        style={{ overflow: "hidden" }}
      >
        <div
          className="col-12 text-end pe-2 pe-md-5"
          style={{ marginBottom: "-4rem" }}
        >
          <p>
            Showing {projectsToMap.length} of {projects.length}
          </p>
        </div>
        {projectsToMap.map((p, i) => {
          return (
            <div
              key={i}
              className="col-12 col-md-6"
              style={{ margin: "4rem 0" }}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={i % 2 ? "500" : "200"}
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
