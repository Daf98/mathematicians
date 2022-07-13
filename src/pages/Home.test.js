import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Home />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});