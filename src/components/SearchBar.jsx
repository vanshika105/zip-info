import { fetchZipData } from "../store/zip-actions";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ bgColor, width, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [enteredZip, setEnteredZip] = useState(''); 
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setEnteredZip("");
  };

  const handleClearClick = () => {
    setEnteredZip("");
  };

  const handleInputChange = (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      dispatch(fetchZipData(enteredZip))
        .then(() => {
          setLoading(false);
        })
    } else {
      setEnteredZip(event.target.value);
    }
  }

  return (
    <>
      <div className={`flex rounded-lg ${bgColor} shadow-inner relative ${width} mt-6`}>
      <span className="p-2 text-emerald-900 text-lg">
        <FiSearch />
      </span>
      <input
        className={`${bgColor} text-11 w-60 rounded-md placeholder-darker-green focus:outline-none`}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={enteredZip}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
      />
      {isFocused && (
        <span className="p-2 text-emerald-900 text-lg absolute right-0 cursor-pointer" onClick={handleClearClick}>
          <IoMdClose />
        </span>
      )}
    </div>
    {loading && <div>Loading data...</div>}
    </>
  );
};

export default SearchBar;