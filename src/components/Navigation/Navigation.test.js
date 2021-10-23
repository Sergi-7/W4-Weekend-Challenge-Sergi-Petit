import Navigation from "./Navigation";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Navigation component", () => {
  describe("When it receives an actionOnClick with a test function", () => {
    test("Then it should trigger the testFunction", () => {
      const testFunction = jest.fn();

      render(<Navigation actionOnClick={testFunction} text={"a"}></Navigation>);
      screen.debug();

      const navigation = screen.getByRole("button");
      userEvent.click(navigation);

      expect(testFunction).toHaveBeenCalled();
    });
  });
});
