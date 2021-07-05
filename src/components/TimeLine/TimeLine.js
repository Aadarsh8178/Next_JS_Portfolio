import React, { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { CarouselItemText, AboutHeader } from "./TimeLineStyles";
const Timeline = () => {
  const [active, setActive] = useState("exp");

  return (
    <Section id="about" nopadding>
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm Aadarsh, a CSE graduate from DTU. A Software Developer Engineer with
        major interest in Frontend web development. Along with coding, my
        hobbies are Cricket ,Badminton and dancing.
      </SectionText>
      <AboutHeader>
        <CarouselItemText
          onClick={() => setActive("exp")}
          active={active === "exp"}
        >
          {" "}
          Experience{" "}
        </CarouselItemText>
        <CarouselItemText
          onClick={() => setActive("edu")}
          active={active === "edu"}
        >
          {" "}
          Education{" "}
        </CarouselItemText>
      </AboutHeader>
      {active === "exp" && <Experience />}
      {active === "edu" && <Education />}
    </Section>
  );
};

export default Timeline;
