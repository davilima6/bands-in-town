import React from "react";
import { shallow } from "enzyme";
import { BandsInTownResultsEvent } from "./BandsInTownResultsEvent";

describe("BandsInTownResultsEvent", () => {
  let component;

  beforeEach(() => {
    const props = {
      event: {
        datetime: "2019-12-11T18:00:00",
        venue: {
          name: "Velodrom",
          city: "Berlin",
          country: "Germany"
        }
      }
    };

    component = shallow(<BandsInTownResultsEvent {...props} />);
  });

  test("renders without crashing", () => expect(component).toBeDefined());
});
