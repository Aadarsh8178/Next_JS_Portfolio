import styled from "styled-components";

export const TestimonialItem = styled.div`
  height: 100%;
  box-sizing: content-box;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  & .testimonial-img {
    width: 90px;
    border-radius: 50%;
    margin: -40px 0 0 40px;
    position: relative;
    z-index: 2;
    border: 6px solid rgba(255, 255, 255, 0.12);
  }
  & h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 45px;
    color: #fff;
  }
  & h4 {
    font-size: 14px;
    color: #999;
    margin: 0 0 0 45px;
  }
  & .quote-icon-left,
  & .quote-icon-right {
    color: rgba(255, 255, 255, 0.25);
    font-size: 26px;
  }
  & .quote-icon-left {
    display: inline-block;
    left: -5px;
    top: -8px;
    position: relative;
  }
  & .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 8px;
  }
  & div {
    margin: 0 15px 0 15px;
    padding: 20px 20px 60px 20px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    border-radius: 6px;
    position: relative;
    z-index: 1;
    flex: 1 auto;
    display: grid;
    place-content: center;
    & p {
      font-style: italic;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 320px;
  }
`;
