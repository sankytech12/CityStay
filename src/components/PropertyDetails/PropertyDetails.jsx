import React from 'react'
import { PropertyCard } from '../PropertyCard/PropertyCard'
import { useParams } from 'react-router-dom';

export const PropertyDetails = ({properties}) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  if (!property) {
    return <h1>Property not found</h1>;
  }
  return (
    <div>
      <PropertyCard property={property}/>
    </div>
  )
}
