import React, { useState } from "react";
import styled from "styled-components";
import Acheterbien from "./Acheter/acheter";
import Vendrebien from "./Vendre/vendre";
import Avis from "./review";

// STYLED-COMPONENTS
const Bodybien = styled.div`
  background: #f9f3f3;
  margin: 0;
`

const Button = styled.button`
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 10px 5px;
  cursor: pointer;
  border: none;
  background: white;
`

export default function Biens() {
  const [activeComponent, setActiveComponent] = useState("acheter");

  const handleClick = (component) => { 
    setActiveComponent(component);
  };

  return (
    <Bodybien>    
      <div>
        <Button onClick={() => handleClick("acheter")}>Acheter</Button>
        <Button onClick={() => handleClick("vendre")}>Vendre</Button>
      </div>
      {activeComponent === "acheter" ? <Acheterbien /> : <Vendrebien />}
      <Avis />
    </Bodybien>
  );
}