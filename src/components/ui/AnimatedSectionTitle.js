import React from "react";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";

function AnimatedSectionTitle({ title }) {
  return (
    <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="400">
      <SectionDivider divider />
      <SectionTitle>{title}</SectionTitle>
    </div>
  );
}

export default AnimatedSectionTitle;
