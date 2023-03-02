import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .form {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 1.18 rem;
      font-weight: 700;
      color: #fff;
    }

    &__input {
      height: 40px;
      border-radius: 8px;
      border: solid 1px #fff;
      padding: 11px;
      background-color: #e8e8e8;
      color: ${(props) => props.theme.colors.primary};

      ::placeholder {
        font-family: ${(props) => props.theme.fonts.primary};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export default RegisterFormStyled;
