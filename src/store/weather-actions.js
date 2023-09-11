import { weatherActions } from "./weather-slice";

export const fetchWeatherData = (city) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8af6fc305e52160f39fe632bdabdf171&units=metric`
      );

      if (!response.ok) {
        throw new Error("Could not fetch weather data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const weatherData = await fetchData();

      console.log(weatherData.weather[0].main);

      //const locationData = weatherData.location;
      //const currentWeather = weatherData.main;
      dispatch(weatherActions.updateWeather({
        city: city,
        data: weatherData.main,
        weatherIcon: weatherData.weather[0].main,
        windSpeed: weatherData.wind.speed
      }));
    } catch (error) {
        console.log(error);
    }
  };
};
