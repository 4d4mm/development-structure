import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  // NOTE: Because the imported material-ui component is well tested
  // in the library itself, the developes only need to test the
  // additional functionality in the application code. In contrast
  // to the bootstrap where the developers have to options:
  // - using the native javascript components the developers have to
  //   create an interface which is making the bootstrap components usable.
  // - or using something like react-bootstrap where the themes are different
  //   than the base bootstrap, therefore there's a learning curve.
  it("sets the default text alignmet to center", () => {
    const button = mount(<Button>Test</Button>);
    const buttonDefautAlignment = button.find("button").prop("className");
    expect(buttonDefautAlignment).toContain("textAlignCenter");
  });
  it("applies text alignment left", () => {
    const leftAlignedButton = mount(<Button textAlign="left">Test</Button>);
    expect(leftAlignedButton.find("button").prop("className")).toContain(
      "textAlignLeft"
    );
  });
  it("applies text alignment right", () => {
    const rightAlignedButton = mount(<Button textAlign="right">Test</Button>);
    expect(rightAlignedButton.find("button").prop("className")).toContain(
      "textAlignRight"
    );
  });
});
