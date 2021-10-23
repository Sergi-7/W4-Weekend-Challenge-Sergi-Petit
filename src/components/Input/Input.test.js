const { render, screen } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { default: Input } = require("./Input.js");

describe("When an input component", () => {
  describe("Given a text", () => {
    test("Then it should", () => {
      render(
        <Input
          text={""}
          type={"text"}
          label={"a"}
          id={"a"}
          onChangeAction={() => {}}
        />
      );

      const inputEl = screen.getByRole("textbox");
      userEvent.type(inputEl, "test-text");

      expect(inputEl).toHaveValue("test-text");
    });
  });
});
