import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Json from "./MockData.json";
import "./App.css";
import { useEffect, useState } from "react";
import { Headers } from "./components/Headers/Headers";
import { PropertyList } from "./components/PropertyList/PropertyList";
import { PropertyDetails } from "./components/PropertyDetails/PropertyDetails";

function App() {
  const [activeCity, setActiveCity] = useState("New York"); // Default active city
  const [properties, setProperties] = useState(Json[activeCity].slice(0, 6)); // Array of property data
  const [isshowMore, setIsShowMore] = useState(true);

  useEffect(() => {
    loadProperties();
  }, [activeCity]);

  const loadProperties = () => {
    const mockProperties = Json;
    setProperties(mockProperties[activeCity].slice(0, 6));
  };
  const loadExtraProperties = () => {
    setIsShowMore(!isshowMore);
    if (isshowMore) setProperties(Json[activeCity]);
    else setProperties(Json[activeCity].slice(0, 6));
  };

  return (
    <Router>
      <div className="App">
        <Headers
          activeCity={activeCity}
          setActiveCity={setActiveCity}
          loadProperties={loadProperties}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PropertyList
                properties={properties}
                loadExtraProperties={loadExtraProperties}
                isshowMore={isshowMore}
                setIsShowMore={setIsShowMore}
              />
            }
          />
          <Route
            path="/property/:id"
            element={<PropertyDetails properties={properties} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
