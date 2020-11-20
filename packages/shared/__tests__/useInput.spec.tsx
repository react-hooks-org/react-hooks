import React from "react";
import {useInput} from "../useInput";
import { render, cleanup, fireEvent, act } from "@testing-library/react";

describe("useInput", () => {
  // basic tests
  describe("basic", () => {
    let App;
    beforeEach(() => {
      App = function() {
        const myInput = useInput("hello");
        return (
          <div>
            <input data-testid="input-element" {...myInput} />
            <input data-testid="display-element" {...myInput} />
          </div>
        );
      };
    });
    afterEach(cleanup); // <-- add this

    it("should be defined", () => {
      expect(useInput).toBeDefined();
    });
    it("sets initial value correctly", () => {
      const { getByTestId } = render(<App />);
      const inputElement = getByTestId("input-element") as HTMLInputElement;
      expect(inputElement.value).toBe("hello");
    });
    it("updates value correctly", () => {
      const { getByTestId } = render(<App />);
      const inputElement = getByTestId("input-element") as HTMLInputElement;
      const displayElement = getByTestId("display-element") as HTMLInputElement;
      expect(inputElement.value).toBe("hello");
      expect(displayElement.value).toBe("hello");
      act(() => {
        fireEvent.change(inputElement, {
          target: {
            value: "world"
          }
        });
      });
      expect(inputElement.value).toBe("world");
      expect(displayElement.value).toBe("world");
    });
  });
  // validate
  describe("validate", () => {
    let App;
    beforeEach(() => {
      App = function({ validate }) {
        const myInput = useInput(5, {
          validate: validate || (newValue => newValue < 10)
        });
        return (
          <div>
            <input type="number" data-testid="input-element" {...myInput} />
          </div>
        );
      };
    });
    afterEach(cleanup); // <-- add this

    it("does not update if validate returns false", () => {
      const { getByTestId } = render(<App />);
      const inputElement = getByTestId("input-element") as HTMLInputElement;
      act(() => {
        fireEvent.change(inputElement, {
          target: {
            value: 10
          }
        });
      });
      expect(parseInt(inputElement.value)).toBe(5);
    });
    it("updates if validate returns true", () => {
      const { getByTestId } = render(<App />);
      const inputElement = getByTestId("input-element") as HTMLInputElement;
      act(() => {
        fireEvent.change(inputElement, {
          target: {
            value: 9
          }
        });
      });
      expect(parseInt(inputElement.value)).toBe(9);
    });
    it("validate can be used to compare possible newvalue with current value", () => {
      const { getByTestId } = render(
        <App validate={(newValue, currValue) => newValue % currValue != 0} />
      );
      const inputElement = getByTestId("input-element") as HTMLInputElement;
      act(() => {
        fireEvent.change(inputElement, {
          target: {
            value: 6
          }
        });
      });
      expect(parseInt(inputElement.value)).toBe(6);
      act(() => {
        fireEvent.change(inputElement, {
          target: {
            value: 12
          }
        });
      });
      expect(parseInt(inputElement.value)).toBe(6);
    });
  });

  describe("multiple", () => {
    let App;
    beforeEach(() => {
      App = function() {
        const myInput = useInput(5);
        const myInput2 = useInput(myInput.value);
        return (
          <div>
            <input type="number" data-testid="input-element1" {...myInput} />
            <input type="number" data-testid="input-element2" {...myInput2} />
          </div>
        );
      };
    });
    afterEach(cleanup); // <-- add this

    it("updates value of input if initial value changes ", () => {
      const { getByTestId } = render(<App />);
      const inputElement1 = getByTestId("input-element1") as HTMLInputElement;
      const inputElement2 = getByTestId("input-element2") as HTMLInputElement;
      expect(parseInt(inputElement1.value)).toBe(5);
      expect(parseInt(inputElement2.value)).toBe(5);

      act(() => {
        fireEvent.change(inputElement2, {
          target: {
            value: 6
          }
        });
      });
      expect(parseInt(inputElement2.value)).toBe(6);

      act(() => {
        fireEvent.change(inputElement1, {
          target: {
            value: 10
          }
        });
      });
      expect(parseInt(inputElement1.value)).toBe(10);
      expect(parseInt(inputElement2.value)).toBe(10);
    });
  });
});

// figure out tests
