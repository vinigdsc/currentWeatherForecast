import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [date, setDate] = useState();

  const URL_KEY = "da6fc6b470d74ecda37172111221312 ";
  const days = 1;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${URL_KEY}&q=${city}&days=${days}&aqi=no&alerts=no&lang=pt
  `;

  const historydate = "19/12/2022";

  const historyAPI = `http://api.weatherapi.com/v1/history.json?key=${URL_KEY}&q=${city}&dt=${historydate}
  `;

  axios.get(historyAPI).then((r) => {
    console.log(r.history);
  });

  const handleChange = (event) => {
    setCity(event.target.value);
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    }, 10000);
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Insira o nome da cidade..."
          onChange={handleChange}
          value={city}
        />
        <div className="date">
          <h5>Data selecionada: {date}</h5>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.location ? <h2>{data.location.name} </h2> : null}
          </div>
          <div className="location location__description">
            {data.location ? (
              <h3>
                {data.location.region}, {data.location.country}
              </h3>
            ) : null}
          </div>
          <div className="temp">
            {data.current ? <h1>{data.current.temp_c}°C</h1> : null}
          </div>
          <div className="temp">
            {data.current ? <h2>{data.current.condition.text}</h2> : null}
            <div>
              {data.current ? (
                <img src={data.current.condition.icon} alt="" />
              ) : null}
            </div>
          </div>

          <div className="description"></div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">
              {data.current ? <p>{data.current.feelslike_c} °C</p> : null}{" "}
            </p>
            <p>Sensação termica</p>
          </div>
          <div className="humidity">
            <p className="bold">
              {data.current ? <p>{data.current.humidity}%</p> : null}
            </p>
            <p>Umidade</p>
          </div>
          <div className="wind">
            <p className="bold">
              {data.current ? <p>{data.current.wind_kph} KM/H</p> : null}
            </p>
            <p>Velocidade do vento</p>
          </div>
          <div className="temp">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].day.maxtemp_c} °C</p>
              ) : null}
            </p>
            <p>Temperatura maxima</p>
          </div>
          <div className="temp">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].day.mintemp_c} °C</p>
              ) : null}
            </p>
            <p>Temperatura minima</p>
          </div>
        </div>
        <div className="bottom">
          <div className="moon">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].astro.moon_phase}</p>
              ) : null}
            </p>
            <p>Fase da Lua</p>
          </div>
          <div className="moon">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].astro.moonrise}</p>
              ) : null}
            </p>
            <p>Nascer da Lua</p>
          </div>
          <div className="moon">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].astro.moonset}</p>
              ) : null}
            </p>
            <p>Por da Lua</p>
          </div>
          <div className="sun">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].astro.sunrise}</p>
              ) : null}
            </p>
            <p>Nascer do Sol</p>
          </div>
          <div className="sun">
            <p className="bold">
              {data.current ? (
                <p>{data.forecast.forecastday[0].astro.sunset}</p>
              ) : null}
            </p>
            <p>Por do Sol</p>
          </div>
        </div>
        <article className="grid-wrap">
          <div className="card">
            <div className="card-head">
              <h1>Segunda-feira</h1>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card">
            <div className="card-head">
              <h1>Terça-feira</h1>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card">
            <div className="card-head">
              <h1>Quarta-feira</h1>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card">
            <div className="card-head">
              <h1>Quinta-feira</h1>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card">
            <div className="card-head">
              <h1>Sexta-feira</h1>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card">
            <div className="card-head">
              <h1>Sabado</h1>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card">
            <div className="card-head">
              <h1>Domingo</h1>
            </div>
            <div className="card-body"></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default App;
