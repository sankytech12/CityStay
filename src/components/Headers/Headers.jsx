import "./Headers.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Headers = ({ activeCity, setActiveCity, loadProperties }) => {
  const navigate = useNavigate();
  const cities = ["New York", "Mumbai", "Paris", "London"];
  const handleTabClick = (city) => {
    setActiveCity(city);
    loadProperties();
    navigate("/");
  };

  return (
    <div className="header">
      {cities.map((city) => (
        <div
          key={city}
          className={`tab ${city === activeCity ? "active" : ""}`}
          onClick={() => handleTabClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};
