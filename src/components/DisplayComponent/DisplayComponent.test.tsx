import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import DisplayComponent from "./DisplayComponent";
import { time } from "console";

describe("render DisplayComponent", () => {
  let DisplayComponentWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => {
    DisplayComponentWrapper = shallow(
      <DisplayComponent time={{ ms: 0, s: 0, m: 0, h: 0 }} />
    );
  });
  it("should render div", () => {
    expect(DisplayComponentWrapper.find("div").length).toEqual(1);
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").length).toEqual(3);
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").slice(0, 1).text()).toBe("00");
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").slice(1, 2).text()).toBe("00");
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").slice(2, 3).text()).toBe("00");
  });
});

describe("render DisplayComponent on different props", () => {
  let DisplayComponentWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => {
    DisplayComponentWrapper = shallow(
      <DisplayComponent time={{ ms: 12, s: 23, m: 5, h: 0 }} />
    );
  });
  it("should render div", () => {
    expect(DisplayComponentWrapper.find("div").length).toEqual(1);
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").length).toEqual(3);
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").slice(0, 1).text()).toBe("05");
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").slice(1, 2).text()).toBe("23");
  });
  it("should render timer", () => {
    expect(DisplayComponentWrapper.find("span").slice(2, 3).text()).toBe("12");
  });
});
