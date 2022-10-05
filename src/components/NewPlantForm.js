import React, { useState } from "react";

function NewPlantForm() {
  const [plantName, setPlantName] = useState("")
  const [plantImage, setPlantImage] = useState("")
  const [plantPrice, setPlantPrice] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted!')
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form
         onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={plantName}
          onChange={event => setPlantName(event.target.value)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={plantImage}
          onChange={event => setPlantImage(event.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={plantPrice}
          onChange={event => setPlantPrice(parseFloat(event.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
