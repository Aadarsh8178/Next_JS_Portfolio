import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 100% 0;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;
export const TitleContent = styled.div`
  text-align: center;
  margin: 0.5rem 0;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  height: 100px;
  max-height: 100px;
  overflow: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #9cc9e3;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #801414;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  & span {
    font-size: 1.3rem;
  }
`;
export const CardTab = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: rgba(0, 0, 0, 0.8);
  padding-top: 1.5rem;
  margin-bottom: 2rem;
`;
export const Tab = styled.div`
  text-align: center;
  margin: 1rem 0;
  & span {
    cursor: pointer;
    border-radius: 10px;
    padding: 2rem;
    padding-top: 1rem;
    transition: all 0.3s ease;
    background: ${({ theme, active }) => active && theme.colors.background1};
    color: ${({ active }) => (active ? "#9cc9e3" : "white")};
  }
`;
export const ViewAll = styled.div`
  padding-right: 4rem;
  cursor: pointer;
  text-align: right;
  & span {
    font-size: 2rem;
  }
  & span:hover {
    color: #9cc9e3;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-right: 2rem;
  }
`;
