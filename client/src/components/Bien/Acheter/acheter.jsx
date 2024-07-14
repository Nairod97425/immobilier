import React, { useState } from "react";
import PropertyDetails from "./detailsLogement";
import PropertyFilters from "./PropertyFilters";
import properties from "./propertiesData";
import ImageCarousel from "./carousel";
import styled from "styled-components"

//STYLED.COMPONENT
const BodyAcheter = styled.div`
  margin: 0;
`
const BlocAcheter = styled.div` 
  margin: 0 20px;
`
const TytleH3 = styled.div`
  color: black;
  font-size: 30px;
  margin: 10px 0;
  font-weight: bold;
`
const BlocBien = styled.div`
background: white;
  border-radius: 2px;
  padding: 10px;
  margin: 15px 0;
`
const BlocP = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`
const P = styled.div`
  font-size: 15px;
`
const BlocDescription =styled.div`
  margin: 10px;
`
const TitleH4 = styled.div`
  font-weight: bold;
  text-decoration: underline;
  font-size: 20px;
`
const Description =styled.div`
  margin: 10px 0;
  font-size: 15px;
`
const BlocDate = styled.div`
  font-weight: bold;
  font-size: 15px;
`
const PropertyList = () => {

  const [filters, setFilters] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  // Appliquer les filtres à la liste de logements
  const sortedProperties = properties.sort((a, b) => {
    if (filters.sortByDate === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (filters.sortByDate === "oldest") {
      return new Date(a.date) - new Date(b.date);
    } else if (filters.sortByPrice === "lowest") {
      return a.price - b.price;
    } else if (filters.sortByPrice === "highest") {
      return b.price - a.price;
    } else if (filters.sortBySurface === "smallest") {
      return a.surface - b.surface;
    } else if (filters.sortBySurface === "largest") {
      return b.surface - a.surface;
    }
    return 0;
  });

  return (
    <BodyAcheter>

      <BlocAcheter>
        {selectedProperty && <PropertyDetails property={selectedProperty} />}
        <PropertyFilters onFilterChange={handleFilterChange} />
        {/* Afficher la liste de logements triés */}
        {sortedProperties.map((property) => (
          <BlocBien key={property.id} onClick={() => handlePropertyClick(property)}>
            {/* Afficher les détails du logement */}
            <TytleH3>{property.title}</TytleH3>
            <ImageCarousel images={property.images} />
            <BlocP>
            <P>Prix : {property.price} €</P>
            <P>Surface : {property.surface} m²</P>
            <P>Chambres : {property.bedrooms}</P>
            <P>Salles de bain : {property.bathrooms}</P>
          </BlocP>
          <BlocDescription>
            <TitleH4>Description :</TitleH4>
            <Description>
              {property.description}
            </Description>
            <BlocDate>Date du DPE : {property.date}</BlocDate>
          </BlocDescription>
          </BlocBien>
        ))}
      </BlocAcheter>
    </BodyAcheter>
  );
};

export default PropertyList;
