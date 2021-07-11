import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const animate = {
  "data-aos": "fade-in",
  "data-aos-duration": "500",
  "data-aos-delay": "1000",
};
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center data-aos="fade-up" data-aos-duration="500">
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          Passionate about coding with keen interest in web development.
          Dedicated with a zeal to learn new technologies and grow.
        </SectionText>
        <Button
          animate={animate}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1UMVzHqUomaKREUGDiLQxA5q9vf5_V22k/view",
              "_blank"
            )
          }
        >
          Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
