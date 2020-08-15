import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Timer from "./Timer";

describe("render Timer", () => {
  let TimerWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (TimerWrapper = shallow(<Timer />)));
  it("should render 3 divs", () => {
    expect(TimerWrapper.find("div").length).toEqual(3);
  });
  it("should render DisplayComponent", () => {
    expect(TimerWrapper.find("DisplayComponent").length).toEqual(1);
  });
  it("should render BtnComponent", () => {
    expect(TimerWrapper.find("BtnComponent").length).toEqual(1);
  });
});
