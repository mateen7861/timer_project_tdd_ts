import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<App />)));
  it("should render h1", () => {
    expect(AppWrapper.find("h1").length).toEqual(1);
  });
  it("should render timer app title", () => {
    expect(AppWrapper.find("h1").text()).toBe("Timer App");
  });
  it("should render timer app title", () => {
    expect(AppWrapper.find("h1").text()).toBe("Timer App");
  });
  it("should render timer", () => {
    expect(AppWrapper.find("Timer").length).toEqual(1);
  });
});
