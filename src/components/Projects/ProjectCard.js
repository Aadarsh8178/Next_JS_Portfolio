import React, { useState } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  CardTab,
  Tab,
} from "./ProjectsStyles";

function ProjectCard({ p }) {
  const [active, setActive] = useState("desc");

  return (
    <BlogCard className="h-100">
      <Img src={p.image} />
      <TitleContent>
        <HeaderThree title>{p.title}</HeaderThree>
      </TitleContent>
      <CardTab>
        <Tab active={active === "desc"}>
          <span onClick={() => setActive("desc")}>Description</span>
        </Tab>
        <Tab active={active === "learn"}>
          <span onClick={() => setActive("learn")}>Learnings</span>
        </Tab>
      </CardTab>
      <div style={{ padding: "1rem" }}>
        {active === "desc" && (
          <CardInfo className="card-info">{p.description}</CardInfo>
        )}
        {active === "learn" && (
          <CardInfo className="card-info">{p.learning}</CardInfo>
        )}
        <div>
          <TitleContent className="mt-5">Stack</TitleContent>
          <TagList>
            {p.tags.map((t, i) => {
              return (
                <span class="badge bg-light text-dark m-2" key={i}>
                  {t}
                </span>
              );
            })}
          </TagList>
        </div>
        <UtilityList>
          {p.visit && (
            <ExternalLinks href={p.visit} target="_blank">
              Code
            </ExternalLinks>
          )}

          {p.source && (
            <ExternalLinks href={p.source} target="_blank">
              Source
            </ExternalLinks>
          )}
        </UtilityList>
      </div>
    </BlogCard>
  );
}

export default ProjectCard;
