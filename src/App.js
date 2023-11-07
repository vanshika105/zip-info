import { useDispatch } from "react-redux";
import { fetchZipData } from "./store/zip-actions";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchZipData('400093'));
  }, [dispatch]);

  return (
    <div className="md:container md:mx-auto my-2 p-14 max-w-none sm:max-w-2xl sm:max-h-full text-center bg-green-bg rounded-3xl">
    <div className="flex flex-col items-center justify-center">
    <Header/>
    <SearchBar bgColor="bg-dark-green-bg" width="w-96" placeholder="Enter your zip"/>
    </div>
      <Details/>
    </div>
  );
}

export default App;
