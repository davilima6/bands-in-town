import React from "react";
import { shallow } from "enzyme";
import BandsInTownForm from "./BandsInTownForm";

const setArtist = jest.fn();
const onSubmit = jest.fn();

describe("BandsInTownForm", () => {
  let component;

  beforeEach(() => {
    const props = {
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

  test("renders one input of type text", () => {
    const items = component.find("input[type='text']");

    expect(items.length).toEqual(1);
  });
});
