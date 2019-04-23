import React from "react";
import { act } from "react-dom/test-utils";
import { mount, shallow } from "enzyme";
import BandsInTownForm from "./BandsInTownForm";

const setArtist = jest.fn();
const onSubmit = jest.fn();

describe("BandsInTownForm", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      setArtist,
      onSubmit
    };

    component = shallow(<BandsInTownForm {...props} />);
  });

  test("renders without crashing", () => expect(component).toBeDefined());

  test("renders one form", () => {
    const items = component.find("form");

    expect(items.length).toEqual(1);
  });

  test("renders one text input", () => {
    const items = component.find(".form-input");
    const { type: inputType } = items.props();

    expect(items.length).toEqual(1);
    expect(inputType).toBe("text");
  });

  test("renders one button", () => {
    const items = component.find(".form-btn");

    expect(items.length).toEqual(1);
  });

  test.skip("calls handler on input change", () => {
    const mountedComponent = mount(<BandsInTownForm {...props} />);
    const input = mountedComponent.find(".form-input");

    act(() => {
      input.props().value = "abba";
      input.simulate("change", input);
    });

    expect(setArtist.mock.calls.length).toEqual(1);
  });

  test("calls handler on form submit", () => {
    const mountedComponent = mount(<BandsInTownForm {...props} />);
    const btn = mountedComponent.find(".form-btn");

    act(() => {
      btn.simulate("submit");
    });

    expect(onSubmit.mock.calls.length).toEqual(1);
  });
});
