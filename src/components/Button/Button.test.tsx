import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it renders with the text 'Sign up'", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <Button text={expectedText} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
