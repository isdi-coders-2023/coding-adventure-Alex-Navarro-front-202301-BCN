import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;

  .form {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    &__label {
      font-family: var(--primary-font);
      font-size: 1.18 rem;
      font-weight: 700;
      color: #fff;
    }

    &__input {
      display: flex;
      height: 40px;
      max-width: 832px;
      border-radius: 8px;
      border: solid 1px #fff;
      align-items: center;
      padding: 11px;

      ::placeholder {
        font-family: var(--primary-font);
        color: black;
      }
    }
  }
`;

export default RegisterFormStyled;
