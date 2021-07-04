import styled, { keyframes } from "styled-components";

export const Slider = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0 80px;
  display: flex;
  width: 95%;
  max-width: 1100px;
  margin: 0 auto;
  & .left,
  .right {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease;
  }
  .right {
    left: 100%;
    transform: translateX(-100%);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    height: 335px;
    & .left,
    .right {
      width: 34px;
    }
    & p {
      font-size: 0.8rem;
      width: 80%;
      padding: 0.3rem;
    }
  }
`;
export const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
  & img {
    width: 100% !important;
    object-fit: cover !important;
    border-radius: 10px;
  }
`;
export const SliderCard = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  transform: scale(0.5);
  transition: 0.4s ease-in-out;
  box-shadow: 0 4px 14px 0 rgb(255, 255, 255, 10%);
  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const Description = styled.div``;

const glow = keyframes`{
  from{text-shadow:0px 0px 5px #fff,0px 0px 5px #fff;}
  to{text-shadow:0px 0px 9px #fff,0px 0px 8px #fff;}
}`;
export const StyledTitle = styled.h1`
  color: #161523;
  text-shadow: 0px 0px 6px #fff, 0px 0px 6px #fff;
`;

const animate = keyframes`{
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
`;

const rotate = keyframes`{
  to {
    transform: rotate(360deg);
  }
}`;

export const StyledLoader = styled.div`
  width: 100px;
  height: 100px;

  &__ring {
    position: absolute;
    width: 100px;
    height: 100px;

    &:first-child {
      transform: skew(30deg, 20deg);
    }

    &:last-child {
      transform: skew(-30deg, -20deg) scale(-1, 1);

      svg {
        animation-delay: -0.5s;
      }
    }

    svg {
      animation: ${rotate} 1s linear infinite;
      fill: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const ToolTip = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: 0.3s ease;
  transform: translate(-15px, -35px);
  background: white;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
`;
