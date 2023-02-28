import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <>
      <RegisterFormStyled className="form">
        <h2 className="form__title">Register for the event</h2>
        <div className="label-container">
          <label htmlFor="email" className="label-container__title">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Introduce your email"
            className="form__input"
          />
        </div>
        <div className="label-container">
          <label htmlFor="password" className="label-container__title">
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
        <div className="label-container">
          <label htmlFor="image" className="label-container__title">
            Image
          </label>

          <input
            id="image"
            type="file"
            placeholder="Introduce an image"
            accept="image/png, image/jpeg"
            className="form__input image-input"
          />
        </div>
        <Button text="Sign up" />
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
