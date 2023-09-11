import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weather-actions";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchWeatherData('Delhi'));
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="md:container md:mx-auto p-14 max-w-none sm:max-w-2xl sm:max-h-full text-center bg-gradient-to-r from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% rounded-3xl">
      <SearchBar/>
    </div>
    </div>
  );
}

export default App;
