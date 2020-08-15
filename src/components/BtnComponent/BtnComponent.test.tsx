import React from "react";
import { shallow, ShallowWrapper, mount } from "enzyme";
import Timer from "../Timer/Timer";
describe("render ButtonComponent", () => {
  let ButtonComponentWrapper;

  beforeEach(() => {
    ButtonComponentWrapper = mount(<Timer />);
  });
});
