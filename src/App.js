import React, { useState } from "react";
import axios from "axios";

function App() {
  const URL_KEY = "da6fc6b470d74ecda37172111221312 ";
  const city = "Sao paulo";
  const days = 1;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${URL_KEY}&q=${city}&days=${days}&aqi=no&alerts=no
  `;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>30°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>30°C</p>
          </div>
          <div className="humidity">
            <h1>20%</h1>
          </div>
          <div className="wind">
            <h1>20kph</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
