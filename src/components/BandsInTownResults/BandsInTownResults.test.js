import React from "react";
import { shallow } from "enzyme";
import BandsInTownResults from "./BandsInTownResults";

describe("BandsInTownResults", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      artist: {
        name: "Paul Klee",
        image_url: "https://fb.com/pklee.jpg",
        facebook_page_url: "https://fb.com/pklee",
        events: []
      },
      hasError: false
    };

    component = shallow(<BandsInTownResults {...props} />);
  });

  test("renders without crashing", () => expect(component).toBeDefined());

  test("renders result", () => {
    const imageSrc = component.find(".bit-artist-image img").props().src;
    const fbPage = component.find(".bit-artist-fb-page").text();
    const name = component.find(".bit-artist-name").text();

    expect(imageSrc).toEqual(props.artist.image_url);
    expect(fbPage).toEqual(props.artist.facebook_page_url);
    expect(name).toEqual(props.artist.name);
  });

  test("renders no events", () => {
    const items = component.find(".bit-events");

    expect(items.length).toEqual(0);
  });

  test("renders events", () => {
    props.artist.events = [
      {
        id: "1013498469",
        date: "Sat May 11 2019",
        venue: {
          name: "Huntington State Beach",
          city: "Huntington Beach",
          country: "United States"
        }
      }
    ];
    component = shallow(<BandsInTownResults {...props} />);
    const items = component.find(".bit-events");

    expect(items.length).toEqual(1);
  });

  test("renders error message when needed", () => {
    props.hasError = true;
    component = shallow(<BandsInTownResults {...props} />);
    const errorStrPartial = "There was an error retrieving";

    expect(component.text()).toContain(errorStrPartial);
  });
});
