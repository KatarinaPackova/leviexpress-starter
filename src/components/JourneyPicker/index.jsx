import React, { useEffect, useState } from 'react';
import './style.css';

// [
//       { name: 'Praha', code: 'CZ-PRG' },
//       { name: 'Brno', code: 'CZ-BRQ' },
//     ]

export const CityOption = ({ cities }) => {
  // console.log(cities);
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

export const CityDates = ({ dates }) => {
  console.log(dates);
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateCs}
        </option>
      ))}
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState([]);
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // console.log('Vypis jednou');
    const fetchCities = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/cities`,
      );
      const responseData = await response.json();
      console.log('responseData', responseData);
      setCities(responseData.results);
    };
    const fetchDates = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/dates`,
      );
      const responseData = await response.json();
      console.log('responseData', responseData);
      setDates(responseData.results);
    };
    fetchCities();
    fetchDates();
  }, []);

  const handleSubmit = (event) => {
    console.log('Odesílám formulář s cestou');
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
    event.preventDefault();
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => {
                setFromCity(e.target.value);
              }}
            >
              <CityOption cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(e) => {
                setToCity(e.target.value);
              }}
            >
              <CityOption cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            >
              <CityDates dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
