import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <>
      <RegisterFormStyled
        autoComplete="off"
        className="form"
        aria-label="Register user"
        onSubmit={() => {}}
      >
        <label htmlFor="email" className="form__label">
          Email
          <input
            id="email"
            type="email"
            placeholder="Introduce your email"
            className="form__input"
          />
        </label>
        <label htmlFor="password" className="form__label">
          Password
          <input
            id="password"
            type="password"
            placeholder="Introduce your password"
            required
            minLength={8}
            className="form__input"
          />
        </label>
        <label htmlFor="image" className="form__label">
          Image
          <input
            id="image"
            type="file"
            placeholder="Introduce an image"
            accept="image/png, image/jpeg"
            className="form__input"
          />
        </label>

        <Button text="Sign up" />
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
