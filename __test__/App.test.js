import React from "react";
import App from "../src/components/App";
import { render } from "@testing-library/react";

describe("App", function () {
  test("should contain a blue square", function () {
    const { container } = render(<App />);
    expect(container.querySelector(".blue.square")).not.toBeNull();
  });

  test("should contain a red diamond", function () {
    const { container } = render(<App />);
    expect(container.querySelector(".red.diamond")).not.toBeNull();
  });

  test("should contain a blue square", function () {
    const { container } = render(<App />);
    expect(container.querySelector(".green.circle")).not.toBeNull();
  });
});
