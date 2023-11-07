import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const [clear, setClear] = useState(false);
  const { country, state, places, abbr } = useSelector((state) => state.zipInfo);

  const clearData = useCallback(() => {
    setClear((prevClear) => !prevClear);
  }, []);

  return (
    <>
      {!clear && (
        <div className="flex flex-cols items-center justify-between px-5 mt-16">
          <div className="flex flex-rows gap-4 items-center">
            <div className="text-left">
              <img
                className="ml-2"
                src={`https://flagcdn.com/${abbr}.svg`}
                width="40"
                alt={country}
              />
              <p className="text-emerald-900 text-3xl font-medium mt-4">
                {country}
              </p>
              <p className="text-darker-green text-lg font-normal mt-1">{state}</p>
            </div>
          </div>
          <div className="flex flex-rows gap-4 items-center">
            <div className="text-left">
              <div className="text-emerald-900 font-medium text-2xl mb-4">
                Places
              </div>
              <ul className="text-darker-green font-medium list-disc ml-6">
                {places.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="mt-6">
        <button
          className="text-lg text-green-bg mt-8 bg-darker-green rounded-lg px-3 py-1"
          onClick={clearData}
        >
          {clear ? "Display" : "Clear"}
        </button>
      </div>
    </>
  );
};

export default Details;
