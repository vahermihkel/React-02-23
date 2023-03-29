import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  return (
    <div>
      {/* sorteerimine:
      1. sorteeri a-z
      2. sorteeri z-a
      3. sorteeri hind kasvavalt
      4. sorteeri hind kahanevalt */}
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