import React from "react";
import { shallow } from "enzyme";
import BandsInTownResultsEvent from "./BandsInTownResultsEvent";

describe("BandsInTownResultsEvent", () => {
  let component;

  beforeEach(() => {
    const props = {
      event: {
        id: "1013498469",
        date: "Sat May 11 2019",
        venue: {
          name: "Huntington State Beach",
          city: "Huntington Beach",
          country: "United States"
        }
      }
    };

    component = shallow(<BandsInTownResultsEvent {...props} />);
  });

  test("renders without crashing", () => expect(component).toBeDefined());

  test("renders one item", () => {
    const items = component.find(".bit-results-event");

    expect(items.length).toEqual(1);
  });
});
