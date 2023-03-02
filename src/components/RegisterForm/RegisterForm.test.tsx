import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it renders", () => {
    test("Then it should show an input with the label 'Email' to introduce the email", () => {
      const expectedLabelText = /Email/i;

      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );

      const emailInput = screen.getByLabelText(expectedLabelText);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Password' to introduce the password", () => {
      const expectedLabelText = /Password/i;

      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );

      const emailInput = screen.getByLabelText(expectedLabelText);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Image' to introduce the image", () => {
      const expectedLabelText = /Image/i;

      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );

      const emailInput = screen.getByLabelText(expectedLabelText);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up", () => {
      const expectedText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );

      const submitButton = screen.getByRole("button", { name: expectedText });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
