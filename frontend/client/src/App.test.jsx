import App from "./App";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Initial page", () => {
  it("should render main title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /tienda on-line/i
      })
    ).toBeDefined();
  });
});
