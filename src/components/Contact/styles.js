import styled from "styled-components";

export const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  & svg {
    height: 35px;
    width: 35px;
    margin-right: 1rem;
    color: white;
  }
  & h4 {
    margin: 0;
  }
`;
export const StyledForm = styled.form``;

export const FormInput = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-right: ${({ name }) => name && "1rem"};
  padding-left: ${({ email }) => email && "1rem"};
  & .input_wrapper {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    padding: 1rem;
  }
  & label {
    display: block;
    margin-bottom: 0.5rem;
  }
  & textarea,
  & input {
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: white;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 !important;
  }
`;

export const Error = styled.p`
  color: red;
`;
