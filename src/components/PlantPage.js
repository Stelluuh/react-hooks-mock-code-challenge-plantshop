import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //#1: 
  const [plants, setPlants] = useState([])
  //#4: We are adding searchText state here because both the Search and PlantList will need access to this data.
  const [searchText, setSearchText] = useState("")

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

  //#4: we want to use the searchText to determine what plant is displayed using the plantList component:
  const displayedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <main>
      {/* #2: onAddPlant to pass in the handleAddPlant to newplantform */}
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search 
        /*pass down the searhText as a prop so that search can access it: */
        searchText={searchText}
        onSearchChange={setSearchText}/>
      <PlantList plants={displayedPlants}/> 
    </main>
  );
}

export default PlantPage;
