import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiStopwatch } from "react-icons/bi";
import Button from "../../../styles/GlobalComponents/Button";
import { Slide, Slider, SliderCard, ToolTip } from "./styles";

function Carousel({ slides }) {
  const [X, setX] = useState(-100);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [right, setRight] = useState(true);
  const [timer, setTimer] = useState(null);
  const [playAnimation, setPlayAnimation] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    clearTimeout(timer);
    if (playAnimation) {
      const newTimer = setTimeout(() => {
        if (currentSlide <= 1) {
          setRight(true);
        }
        if (currentSlide >= slides.length - 2) {
          setRight(false);
        }
        if (right) {
          slide(-1, true);
        } else {
          slide(1, true);
        }
      }, 2000);
      setTimer(newTimer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, right, playAnimation]);

  const openSite = (link) => {
    window.open(link);
  };

  const slide = (by) => {
    if (X === 0 && by > 0) {
      return;
    }
    if (X === -100 * (slides.length - 1) && by < 0) {
      return;
    }
    setX((p) => p + by * 100);
    if (by > 0) setCurrentSlide((p) => p - 1);
    else setCurrentSlide((p) => p + 1);
  };

  return (
    <>
      <div
        className="d-flex justify-content-end position-relative"
        style={{
          maxWidth: "1230px",
          color: "#3c3874",
        }}
      >
        <BiStopwatch
          style={{ cursor: "pointer" }}
          size={40}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setPlayAnimation((p) => !p)}
        />
        <ToolTip show={show}>
          {playAnimation ? "stop auto scroll" : "play auto scroll"}
        </ToolTip>
      </div>

      <Slider>
        {slides.map((slide, ind) => (
          <Slide
            onClick={() => openSite(slide.link)}
            key={ind}
            style={{ transform: "translateX(" + X + "%)", cursor: "pointer" }}
          >
            <SliderCard
              style={{
                transform: `scale(${
                  ind === currentSlide ? "1" : "0.5"
                }) translateX(${
                  ind < currentSlide ? "50%" : ind > currentSlide ? "-50%" : "0"
                })`,
              }}
            >
              <img src={slide.img} alt="img" />
              <p style={{ fontSize: "16px", textAlign: "center" }}>
                {slide.desc}
              </p>
            </SliderCard>
          </Slide>
        ))}
        <div className="left">
          <Button circle onClick={() => slide(1)} disabled={currentSlide === 0}>
            <BiChevronLeft size={34} />
          </Button>
        </div>
        <div className="right">
          <Button
            circle
            onClick={() => slide(-1)}
            disabled={currentSlide == slides.length - 1}
          >
            <BiChevronRight size={34} />
          </Button>
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
