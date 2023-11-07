import { zipActions } from "./zip-slice";

export const fetchZipData = (zip_code) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`https://api.zippopotam.us/in/${zip_code}`);

      if (!response.ok) {
        throw new Error("Could not fetch zip data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const zipData = await fetchData();

      //console.log(zipData.country);
      let placesArr = [];
      zipData.places.forEach((element) => {
        placesArr.push(element["place name"]);
      });

      //console.log(placesArr);

      dispatch(
        zipActions.updateZipData({
          zip_code,
          country: zipData.country,
          places: zipData.places,
          state: zipData.places[0].state,
          abbr: zipData["country abbreviation"].toLowerCase(),
          places: placesArr,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
