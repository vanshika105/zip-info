import { createSlice } from "@reduxjs/toolkit";

const initialWeatherState = {
  city: '',
  currentWeather: {
    temp: 0,
    feels_like:0,
    temp_min: 0,
    temp_max: 0,
    weatherIcon: ''
  },
  details: {
    humidity: 0,
    windSpeed: 0
  },
  changed: false
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  reducers: {
    updateWeather(state, action){
      state.changed = true;
      state.city = action.payload.city;
      state.currentWeather.temp = action.payload.data.temp;
      state.currentWeather.feels_like = action.payload.data.feels_like;
      state.currentWeather.temp_min = action.payload.data.temp_min;
      state.currentWeather.temp_max = action.payload.data.temp_max;
      state.currentWeather.weatherIcon = action.payload.weatherIcon;
      state.details.humidity = action.payload.data.humidity;
      state.details.windSpeed = action.payload.windSpeed;

      console.log(action.payload.weatherIcon);
    },
  },
});


export default weatherSlice;

export const weatherActions = weatherSlice.actions;
