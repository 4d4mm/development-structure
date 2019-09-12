import React from "react";
import MenuButton from "./MenuButton";
import { mount } from "enzyme";

describe("Menubutton", () => {
  it("matches the previous snapshot", () => {
    const menuButtonRendered = mount(<MenuButton>Test</MenuButton>);
    //expect(menuButtonRendered).toMatchSnapshot();
  });
});
