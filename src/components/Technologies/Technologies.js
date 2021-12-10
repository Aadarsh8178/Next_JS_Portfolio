import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { Section, SectionText } from "../../styles/GlobalComponents";
import AnimatedSectionTitle from "../ui/AnimatedSectionTitle";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech" nopadding>
    <AnimatedSectionTitle title="Technologies" />
    <SectionText
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-delay="500"
    >
      I've worked with a range a technologies in the web development world. From
      Front-end To Backend
    </SectionText>
    <List>
      <ListItem
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-delay="600"
      >
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            <span className="badge bg-info me-2">Reactjs</span>
            <span className="badge bg-info me-2">Nextjs</span>
            <span className="badge bg-info me-2">Angularjs</span>
            <span className="badge bg-info me-2">Vuejs</span>
            <span className="badge bg-info me-2">Redux</span>
            <span className="badge bg-info me-2">Styled Components</span>
            <span className="badge bg-info me-2">React hook form</span>
            <span style={{ fontSize: "15px", display: "block" }}>
              ( 2+ year experience in React including course work and
              internships )
            </span>{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="600"
      >
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <span className="badge bg-info me-2">Nodejs</span>
            <span className="badge bg-info me-2">Hasura</span>
            <span className="badge bg-info me-2">Express</span>
            <span className="badge bg-info me-2">Firebase</span>
            <span className="badge bg-info me-2">GraphQL</span>
            <span className="badge bg-info me-2">Django</span>
            <span className="badge bg-info me-2">DRF</span>
            <span className="badge bg-info me-2">MongoDB</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
