import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #cccf18;
  border-radius: 10px;
  width: 323px;
  height: 40px;

  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 31.48px;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 415px) {
    height: 57px;
  }
`;

export default ButtonStyled;
