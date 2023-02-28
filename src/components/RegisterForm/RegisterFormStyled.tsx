import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .form__input {
    display: flex;
    height: 40px;
    width: 325px;
    border-radius: 8px;
    border: solid 1px #fff;
    align-items: center;

    ::placeholder {
      color: black;
    }

    ::-webkit-file-upload-button {
      content: "Choose file";
    }
  }

  .form__title {
    font-family: var(--secondary-font);
    font-size: 20px;
    color: var(--secondary-color);
    font-weight: 400;
    margin-bottom: -25px;
  }

  .label-container {
    display: flex;
    flex-direction: column;
    gap: 9px;

    &__title {
      font-family: var(--primary-font);
      font-size: 1.18 rem;
      font-weight: 700;
      color: #fff;
    }
  }
`;

export default RegisterFormStyled;
