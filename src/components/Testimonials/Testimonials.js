import React, { useState, useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  CarouselContainer,
  CarouselButton,
  CarouselButtons,
  CarouselButtonDot,
  CarouselItem,
  CarouselMobileScrollNode,
} from "../TimeLine/TimeLineStyles";
import { TestimonialItem } from "./styles";
import { testimonials } from "../../constants/constants";
import AnimatedSectionTitle from "../ui/AnimatedSectionTitle";

const TOTAL_CAROUSEL_COUNT = testimonials.length;

function Testimonials(props) {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    if (node) return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / testimonials.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          testimonials.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="testimonials">
      <br />
      <br />
      <AnimatedSectionTitle title="Testimonials" />
      <CarouselContainer
        ref={carouselRef}
        onScroll={handleScroll}
        style={{ marginLeft: "0" }}
        className="justify-content-start"
      >
        <>
          {testimonials.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={(index + 1) * 500}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
                style={{ maxWidth: "380px", minWidth: "350px", height: "100%" }}
              >
                <TestimonialItem>
                  <div>
                    <p>
                      <ImQuotesLeft className="bx bxs-quote-alt-left quote-icon-left" />
                      {item.desc}
                      <ImQuotesRight className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>

                  <img
                    src={item.img}
                    className="testimonial-img"
                    alt=""
                    onClick={() => window.open(item.linkedin, "_blank")}
                  />
                  <h3>{item.name}</h3>
                  <h4>{item.subdesc}</h4>
                </TestimonialItem>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {testimonials.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
}

export default Testimonials;
