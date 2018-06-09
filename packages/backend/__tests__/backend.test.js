import backend from "../backend";

describe("backend", () => {
  it("adds two numbers", () => {
    expect(backend(1, 2)).toEqual(3);
  });
});
