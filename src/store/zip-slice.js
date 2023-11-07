import { createSlice } from "@reduxjs/toolkit";

const initialZipState = {
  zip_code: '',
  country: '',
  places: [],
  state: '',
  abbr: '',
  places: [],
  changed: false
};

const zipSlice = createSlice({
  name: "zipInfo",
  initialState: initialZipState,
  reducers: {
    updateZipData(state, action){
      state.changed = true;
      state.zip_code = action.payload.zip_code;
      state.country = action.payload.country;
      state.places = action.payload.places;
      state.state = action.payload.state;
      state.abbr = action.payload.abbr;
      state.places = action.payload.places;

      console.log(action.payload.country);
    },
  },
});


export default zipSlice;

export const zipActions = zipSlice.actions;
