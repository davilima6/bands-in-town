import ArtistEvent from "./ArtistEvent";

describe("ArtistEvent", () => {
  test("instantiates a payload correctly", () => {
    const data = {
      offers: [
        {
          type: "Tickets",
          url:
            "https://www.bandsintown.com/t/1013498469?app_id=foo&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
          status: "available"
        }
      ],
      venue: {
        name: "Huntington State Beach",
        country: "United States",
        region: "CA",
        city: "Huntington Beach",
        latitude: "33.6395852",
        longitude: "-117.9741897"
      },
      datetime: "2019-05-11T11:00:00",
      on_sale_datetime: "",
      description: "80s themed music festival on the sand!",
      lineup: ["ABC"],
      id: "1013498469",
      artist_id: "229887",
      url:
        "https://www.bandsintown.com/e/1013498469?app_id=foo&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event"
    };
    const instance = new ArtistEvent(data);
    const expected = {
      id: "1013498469",
      date: "Sat May 11 2019",
      venue: {
        name: "Huntington State Beach",
        city: "Huntington Beach",
        country: "United States"
      }
    };

    expect(instance).toMatchObject(expected);
  });
});
