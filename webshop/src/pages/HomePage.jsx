import React, { useState } from 'react'
import productsFromFile from "../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {products.map(element => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default HomePage