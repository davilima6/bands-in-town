import React from "react";
import { shallow } from "enzyme";
import BandsInTownResults from "./BandsInTownResults";

describe("BandsInTownResults", () => {
  let component;

  beforeEach(() => {
    const props = {
      artist: {
        name: "Paul Klee",
        image_url: "https://fb.com/pklee.jpg",
        facebook_page_url: "https://fb.com/pklee"
      },
      hasError: false
    };

    component = shallow(<BandsInTownResults {...props} />);
  });

  test("renders without crashing", () => expect(component).toBeDefined());
});
