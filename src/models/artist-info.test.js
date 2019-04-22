import ArtistInfo from "./artist-info";

describe("ArtistInfo", () => {
  test("instantiates a payload correctly", () => {
    const data = {
      thumb_url: "https://s3.amazonaws.com/bit-photos/thumb/8525906.jpeg",
      mbid: "87199477-b0df-4ead-84ee-9b54b4abfc3d",
      facebook_page_url: "http://www.facebook.com/712050162318978",
      image_url: "https://s3.amazonaws.com/bit-photos/large/8525906.jpeg",
      name: "ABC",
      id: "229887",
      tracker_count: 54574,
      upcoming_event_count: 7,
      url: "https://www.bandsintown.com/a/229887?came_from=267&app_id=bandcamp"
    };
    const expected = {
      name: "ABC",
      image_url: "https://s3.amazonaws.com/bit-photos/large/8525906.jpeg",
      facebook_page_url: "http://www.facebook.com/712050162318978"
    };

    const instance = new ArtistInfo(data);

    expect(instance).toMatchObject(expected);
  });
});
