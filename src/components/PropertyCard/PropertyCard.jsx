import React from "react";
import "./PropertyCard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { BiBed, BiBath } from "react-icons/bi";
import { SlSizeActual } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={property.image} alt={property.title} />
      <div className="img-property">
        <div className="flex">
          <span className="tag">{property.tag}</span>
          <span className="heart">
            <AiOutlineHeart />
          </span>
        </div>
      </div>
      {property.popular && <div className="popular">Popular</div>}
      <div className="details">
        <p className="location">
          <CiLocationOn />
          {property.location}
        </p>
        <p className="title">{property.title}</p>
        <div className="details-rooms">
          <div className="room">
            <MdOutlineMeetingRoom />
            <span>{property.room} Room</span>
          </div>
          <div className="room">
            <BiBed />
            <span>{property.bed} Bed</span>
          </div>
          <div className="room">
            <BiBath />
            <span>{property.bath} Bath</span>
          </div>
          <div className="room">
            <SlSizeActual />
            <span>{property.size} sft</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span className="price">
          ${property.price} <span>/month</span>
        </span>
        <button onClick={() => navigate(`/property/${property.id}`)}>
          Read More
        </button>
      </div>
    </div>
  );
};
