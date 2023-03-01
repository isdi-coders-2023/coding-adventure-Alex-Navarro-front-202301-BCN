import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <>
      <RegisterFormStyled autoComplete="off" className="form">
        <div className="form__container">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Introduce your email"
            className="form__input"
          />
        </div>
        <div className="form__container">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Introduce your password"
            required
            minLength={8}
            className="form__input"
          />
        </div>
        <div className="form__container">
          <label htmlFor="image" className="form__label">
            Image
          </label>

          <input
            id="image"
            type="file"
            placeholder="Introduce an image"
            accept="image/png, image/jpeg"
            className="form__input"
          />
        </div>
        <Button text="Sign up" />
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
