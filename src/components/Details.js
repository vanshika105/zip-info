import humidityImage from "../images/humidity.png";
import windImage from "../images/wind.png";
import { useSelector } from "react-redux";

const Details = () => {
  const {humidity, windSpeed} = useSelector((state) => state.weather.details);
  const windSpeedInKm = ((windSpeed*18)/5).toFixed(2);

    return(<div className="flex flex-cols items-center justify-between px-5 mt-28">
    <div className="flex flex-rows gap-4 items-center">
        <img src={humidityImage} className="w-10 h-10"/>
        <div className="text-left">
          <p className="text-3xl mb-1">{humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="flex flex-rows gap-4 items-center">
        <img src={windImage} className="w-12 h-12"/>
        <div className="text-left">
          <p className="text-3xl mb-1">{windSpeedInKm} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
      </div>);
}

export default Details;