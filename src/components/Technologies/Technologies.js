import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech" nopadding>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Front-end To Backend
    </SectionText>
    <List>
      <ListItem>
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
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <span className="badge bg-info me-2">Nodejs</span>
            <span className="badge bg-info me-2">Express</span>
            <span className="badge bg-info me-2">Firebase</span>
            <span className="badge bg-info me-2">.Net</span>
            <span className="badge bg-info me-2">MongoDB</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
