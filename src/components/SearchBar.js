import { useDispatch } from 'react-redux';
import searchImage from '../images/search.png'
import Weather from './Weather';
import { fetchWeatherData } from "../store/weather-actions";
import { useState } from 'react';

const SearchBar = () => {
  const [enteredCity, setCity] = useState('');
  const dispatch = useDispatch();

  const cityChangeHandler = (event) =>{
    if(event.key === 'Enter'){
      dispatch(fetchWeatherData(enteredCity));
    }
    else{
      setCity(event.target.value);
    }
  }
  const searchHandler = () =>{
    dispatch(fetchWeatherData(enteredCity));
  };

  return (
    <>
    <div className="flex rounded-2xl items-center justify-between w-full">
      <input
        className="flex-1 rounded-full bg-white border border-slate-300 px-3 py-4 mr-4 shadow-sm focus:outline-none focus:border-gray-400 focus:ring-gray-500 focus:ring-2 placeholder:italic placeholder:text-slate-400 text-lg"
        placeholder="Search your city..."
        type="text"
        name="search"
        value={enteredCity}
        onChange={cityChangeHandler}
        onKeyDown={cityChangeHandler}
      />
      <button className="border-0 outline-0 bg-white rounded-full w-16 h-16 cursor-pointer flex items-center justify-center"
      onClick={searchHandler}>
        <img className='w-6' src={searchImage} alt='search'/>
      </button>
    </div>
    <Weather/>
    </>
  );
};

export default SearchBar;
