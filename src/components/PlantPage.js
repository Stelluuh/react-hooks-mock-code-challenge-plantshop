import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //#1: 
  const [plants, setPlants] = useState([])

  //#1:
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])

  //2#: function added to update the page to show new plants added right away.
  function handleAddPlant(newPlant) {
    const updatedPlantArray = [...plants, newPlant]
    setPlants(updatedPlantArray)
  }

  return (
    <main>
      {/* #2: onAddPlant to pass in the handleAddPlant to newplantform */}
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search />
      <PlantList plants={plants}/> 
    </main>
  );
}

export default PlantPage;
