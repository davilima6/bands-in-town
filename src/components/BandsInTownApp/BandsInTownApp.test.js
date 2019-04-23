import React from "react";
import ReactDOM from "react-dom";
import { mount, shallow } from "enzyme";
import BandsInTownApp from "./BandsInTownApp";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<BandsInTownApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("BandsInTownApp", () => {
  let component;

  beforeEach(() => {
    component = shallow(<BandsInTownApp />);
  });

  test("renders one BandsInTownForm", () => {
    const items = component.find("BandsInTownForm");

    expect(items.length).toEqual(1);
  });

  test("renders no results initially", () => {
    const items = component.find("BandsInTownResults");

    expect(items.length).toEqual(0);
  });

  test.skip("initial state", () => {
    // Hooks currently still not supported by Enzyme.
    // See: https://github.com/airbnb/enzyme/issues/1938
    const items = component.find("button");
    const { isFirstSearch } = component.state();

    expect(isFirstSearch).toBe(true);
  });

  test.skip("renders results panel after first search", () => {
    let mountedComponent = mount(<BandsInTownApp />);
    const btn = mountedComponent.find(".form-btn");

    btn.simulate("submit");

    mountedComponent = mount(<BandsInTownApp />);
    const items = component.find("BandsInTownResults");

    expect(items.length).toEqual(1);
  });
});
