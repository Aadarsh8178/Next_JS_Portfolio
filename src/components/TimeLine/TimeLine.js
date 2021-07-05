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
        Software engineer with excellent problem solving skills and ability to
        perform well in a team. Passionate about coding with keen interest in
        web development. Dedicated with a zeal to learn new technologies and
        grow.
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
