import React from "react";
import Carousel from "../ui/Carousel";
import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";

import { work } from "../../constants/constants";

function FreelanceWork() {
  return (
    <Section nopadding id="work">
      <SectionDivider divider />
      <SectionTitle>Freelance Work</SectionTitle>
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
        <Carousel slides={work} />
      </div>
    </Section>
  );
}

export default FreelanceWork;
