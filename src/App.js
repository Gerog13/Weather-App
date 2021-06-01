import React, { useState } from "react";
import InputSearch from "./components/InputSearch";
import Weather from "./components/Weather";

function App() {
  const [result, setResult] = useState({ state: null });
  const [weather, setWeather] = useState({});

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <a href="/">
        <h1 className="text-5xl mt-10 pb-4 text-gray-50">Weather App</h1>
      </a>

      <InputSearch
        setResult={setResult}
        setWeather={setWeather}
        result={result}
      />
      {result.state ? <Weather weather={weather} /> : ""}
    </div>
  );
}

export default App;
