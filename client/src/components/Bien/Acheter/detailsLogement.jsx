import React from "react";

const PropertyDetails = ({ property }) => {
  return (
    <div className="property-details">
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>
        <strong>Prix :</strong> {property.price} €
      </p>
      <p>
        <strong>Surface :</strong> {property.surface} m²
      </p>
      <p>
        <strong>Chambres :</strong> {property.bedrooms}
      </p>
      <p>
        <strong>Salles de bain :</strong> {property.bathrooms}
      </p>
      <p>
        <strong>Adresse :</strong> {property.address}
      </p>
      <p>
        <strong>Description :</strong> {property.description}
      </p>
      <p>
        <strong>Date d'ajout :</strong> {new Date(property.date).toLocaleDateString()}
      </p>
      {/* Ajouter d'autres détails si nécessaire */}
    </div>
  );
};

export default PropertyDetails;
