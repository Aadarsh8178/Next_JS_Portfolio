import React from "react";
import Carousel from "../ui/Carousel";
import { Section } from "../../styles/GlobalComponents";

import { work } from "../../constants/constants";
import AnimatedSectionTitle from "../ui/AnimatedSectionTitle";

function FreelanceWork() {
  return (
    <Section nopadding id="work">
      <AnimatedSectionTitle title="Freelance Work" />
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
        <Carousel slides={work} />
      </div>
    </Section>
  );
}

export default FreelanceWork;
