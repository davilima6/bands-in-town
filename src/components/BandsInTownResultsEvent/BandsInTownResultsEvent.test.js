import React from "react";
import { shallow } from "enzyme";
import { BandsInTownResultsEvent } from "./BandsInTownResultsEvent";
import { ArtistEvent } from "../../models";

describe("BandsInTownResultsEvent", () => {
  let component;

  beforeEach(() => {
    const props = {
      event: {
        date: "Sat May 11 2019",
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
