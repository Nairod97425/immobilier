import React, { useState } from "react";
import styled from "styled-components"
// Styled-component

const  BlocTrie = styled.div`
  margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  
`

const LabelTrie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-size: 15px;
`
const Select = styled.select`
  margin: 10px 0;
  padding: 6px;
  border: none;
  border-radius: 2px;
`

const Option = styled.option`
  font-size: 15px;
  cursor: pointer;
`

const Button = styled.button`
  padding: 10px;
  border: none;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
`


const PropertyFilters = ({ onFilterChange }) => {
  const [sortByDate, setSortByDate] = useState("latest");
  const [sortByPrice, setSortByPrice] = useState("lowest");
  const [sortBySurface, setSortBySurface] = useState("smallest");

  const handleFilterChange = () => {
    onFilterChange({
      sortByDate,
      sortByPrice,
      sortBySurface,
    });
  };

  return (
    <BlocTrie>
      <LabelTrie>
        Trier par date :
        <Select value={sortByDate} onChange={(e) => setSortByDate(e.target.value)}>
          <Option value="latest">Les plus récents</Option>
          <Option value="oldest">Les plus anciens</Option>
        </Select>
      </LabelTrie>
      <LabelTrie>
        Trier par prix :
        <Select value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
          <option value="lowest">Les moins chers</option>
          <option value="highest">Les plus chers</option>
        </Select>
      </LabelTrie>
      <LabelTrie>
        Trier par surface :
        <Select value={sortBySurface} onChange={(e) => setSortBySurface(e.target.value)}>
          <option value="smallest">Les plus petites</option>
          <option value="largest">Les plus grandes</option>
        </Select>
      </LabelTrie>
      <Button onClick={handleFilterChange}>Appliquer les filtres</Button>
    </BlocTrie>
  );
};

export default PropertyFilters;
