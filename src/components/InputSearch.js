import React, { useCallback, useState } from "react";
import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "87a50cb6d63de3e7c3f7c954d6ebf0ee";
const UNIT = "metric";

const InputSearch = (props) => {
  const [query, setQuery] = useState("");

  const searchWeather = useCallback(async () => {
    const source = axios.CancelToken.source();
    await axios
      .get(`${API_URL}?q=${query}&units=${UNIT}&APPID=${API_KEY}`, {
        cancelToken: source.token,
      })
      .then((response) => {
        props.setWeather(response.data);
        props.setResult((prevState) => {
          return { ...prevState, state: true };
        });
      })
      .catch((error) => {
        props.setResult((prevState) => {
          return { ...prevState, state: false };
        });
        if (axios.isCancel(error)) return;
      });
    setQuery("");
  }, [props, query]);

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const searchWeatherByKey = async (e) => {
    if (e.key === "Enter") {
      searchWeather();
    }
  };

  const searchWeatherByClick = () => {
    searchWeather();
  };
  return (
    <div className="flex justify-center items-center">
      <input
        className={
          props.result.state === true || props.result.state === null
            ? "placeholder-gray-50 placeholder-opacity-30 p-2 bg-transparent border-b-2 outline-none  border-gray-900 focus:outline-none transform focus:scale-105 transition-all ease-linear duration-200 text-lg font-semibold"
            : "placeholder-red-900 placeholder-opacity-90 p-2 bg-transparent border-b-2 outline-none  border-red-900 focus:outline-none text-lg font-semibold"
        }
        placeholder={
          props.result.state === true || props.result.state === null
            ? "Search"
            : "Not result"
        }
        onChange={queryHandler}
        value={query}
        onKeyPress={searchWeatherByKey}
      ></input>
      <button
        className="border-2 border-transparent rounded-xl p-1 self-end outline-none focus:outline-none text-gray-900"
        onClick={searchWeatherByClick}
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputSearch;
