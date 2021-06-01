import React from "react";
import moment from "moment";
import "moment/locale/es";

const Weather = ({ weather }) => {
  let today = moment().locale("es");
  let currentTemp = Math.floor(weather.main.temp);
  let currentMinTemp = Math.floor(weather.main.temp_min);
  let currentMaxTemp = Math.floor(weather.main.temp_max);
  return (
    <div className="flex flex-col  w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/2 xl:w-2/5 mt-10 bg-gray-50 rounded-2xl p-3">
      <div className="flex flex-col items-center p-2">
        <div className="flex items-center justify-center text-3xl font-semibold">
          <h2>{weather.name}</h2>
          <span className="text-xs ordinal p-1 text-indigo-600 text-opacity-90">
            {weather.sys.country}
          </span>
        </div>
        <h5 className="capitalize text-xs text-opacity-50 text-gray-900">{`${today.format(
          "dddd D"
        )} de ${today.format("MMMM")}`}</h5>
      </div>

      <div
        className={
          currentTemp > 15
            ? "flex justify-evenly  text-red-400 text-5xl"
            : "flex justify-evenly  text-blue-400 text-5xl"
        }
      >
        <div className="w-24 p-2">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          ></img>
        </div>

        <div className="flex flex-col p-2">
          <span className="text-sm self-start">{weather.weather[0].main}</span>
          <div className="flex">
            <h3>{currentTemp}</h3>
            <span className="ordinal text-sm font-semibold">ºC</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 p-4 justify-items-start  w-full text-lg font-bold border-2 rounded-2xl shadow-sm border-opacity-20 border-purple-600">
        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-900 text-opacity-30">Min</p>
          <span>{`${currentMinTemp}ºC`}</span>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-900 text-opacity-30">Max</p>
          <span>{`${currentMaxTemp}ºC`}</span>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-900 text-opacity-30">Description</p>
          <div className="flex items-center w-full">
            <i className="fas fa-info pr-2"></i>
            <p className=" capitalize">{weather.weather[0].description}</p>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-900 text-opacity-30">Humidity</p>
          <div className="flex items-center">
            <i className="fas fa-water pr-2"></i>
            <p>{`${weather.main.humidity}%`}</p>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-900 text-opacity-30">Pressure</p>
          <div className="flex items-center">
            <i className="fas fa-cloud pr-2"></i>
            <p>{`${weather.main.pressure}mbar`}</p>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xs text-gray-900 text-opacity-30">Wind</p>
          <div className="flex items-center">
            <i className="fas fa-wind pr-2"></i>
            <p>{`${weather.wind.speed}Km/h`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
