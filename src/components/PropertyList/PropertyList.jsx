import React from "react";
import { PropertyCard } from "../PropertyCard/PropertyCard";
import { BsHourglassSplit } from "react-icons/bs";
import "./PropertyList.css";

export const PropertyList = ({
  properties,
  loadExtraProperties,
  isshowMore,
}) => {
  return (
    <>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="button">
        <button className="btn" onClick={loadExtraProperties}>
          <BsHourglassSplit /> {isshowMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
};
