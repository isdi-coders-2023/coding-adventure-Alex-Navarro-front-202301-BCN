import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  width: 100%;
  max-width: 325px;
  height: 40px;

  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 31.48px;

  align-self: center;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 415px) {
    height: 57px;
  }
`;

export default ButtonStyled;
