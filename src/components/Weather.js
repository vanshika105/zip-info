import rainImage from "../images/rain.png";
import cloudImage from "../images/clouds.png";
import drizzleImage from "../images/drizzle.png";
import mistImage from "../images/mist.png";
import snowImage from "../images/snow.png";
import clearImage from "../images/clear.png";
import Details from "./Details";
import { useSelector } from "react-redux";

const Weather = () => {
  const city = useSelector((state) => state.weather.city);
  const weather = useSelector((state) => state.weather.currentWeather);
  const weatherIcon = weather.weatherIcon;

  const currentDate = new Date();

  // Create an array of month names for formatting
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, date, and month
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const date = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];

  // Construct the formatted date string
  const formattedDate = `${day}, ${date} ${month}`;

  let weatherImage = null;
  if (weatherIcon === "Clear") {
    weatherImage = clearImage;
  } else if (weatherIcon === "Clouds") {
    weatherImage = cloudImage;
  } else if (weatherIcon === "Haze" || weatherIcon === "Mist") {
    weatherImage = mistImage;
  } else if (weatherIcon === "Snow") {
    weatherImage = snowImage;
  } else if (weatherIcon === "Drizzle") {
    weatherImage = drizzleImage;
  } else if (weatherIcon === "Rain") {
    weatherImage = rainImage;
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-between mt-16 ">
        <div className="relative group">
          <img src={weatherImage} className="w-44" alt={weatherIcon} />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-0 bg-slate-700 bg-opacity-70 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
            <p className="text-white text-lg">{weatherIcon}</p>
          </div>
        </div>
          <p className="text-xl mt-3">{formattedDate}</p>
          <p className="text-7xl font-medium mt-6">{weather.temp}&deg; C</p>
          <p className="text-4xl font-normal mt-4">{city}</p>
        </div>
      </div>
      <Details />
    </>
  );
};

export default Weather;
