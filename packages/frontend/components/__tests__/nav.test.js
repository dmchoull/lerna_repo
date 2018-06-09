import React from "react";
import Nav from "../nav";

describe("Nav", () => {
  it("renders", () => {
    expect(<Nav />).toMatchSnapshot();
  });
});
