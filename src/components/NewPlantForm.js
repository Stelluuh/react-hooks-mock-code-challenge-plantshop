import React, { useState } from "react";

function NewPlantForm(onAddPlant/* passed as CB to update original array*/) {
  //#2: 
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  // console.log({name, image, price})
  
  //#2: 
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": image,
        "price": price
      }),
      //#2: from here, we can only see the newly added plant once you refresh the page. We want to see an instant post. So we go back to the plant page and create a function that updates the original plants array.
    })
      .then(response=>response.json())
      // for each plant that we post, we want to pass it in as an argument to the function onAddPlant()
      .then(newPlant => onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={image}
          onChange={event => setImage(event.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={price}
          onChange={event => setPrice(parseFloat(event.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
