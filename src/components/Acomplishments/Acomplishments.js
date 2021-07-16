import React from "react";

import { Section, SectionDivider } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import AnimatedSectionTitle from "../ui/AnimatedSectionTitle";

import { articles } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <AnimatedSectionTitle title="Articles" />
    <div
      className="d-flex flex-wrap"
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-delay="600"
    >
      {articles.map((card, index) => (
        <div key={index} className="col-md-4 col-12 p-4">
          <Box>
            <div className="w-100 position-relative">
              <img src={card.img} />
              <div className="overlay">
                <span
                  className="badge bg-info me-2"
                  onClick={() => window.open(card.link, "_blank")}
                >
                  Read
                </span>
              </div>
            </div>
            <div className="p-3">
              <BoxText>{card.title}</BoxText>
            </div>
          </Box>
        </div>
      ))}
    </div>
    <br />
    <br />
  </Section>
);

export default Acomplishments;
