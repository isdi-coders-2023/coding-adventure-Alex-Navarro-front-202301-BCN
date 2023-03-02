import { useState } from "react";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isDisabled = formData.email === "" || formData.password === "";

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
            value={formData.email}
            onChange={handleDataChange}
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
            value={formData.password}
            onChange={handleDataChange}
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

        <Button isDisabled={isDisabled} text="Sign up" />
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
