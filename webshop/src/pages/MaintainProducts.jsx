import React, { useState } from 'react'
import productsFromFile from "../data/products.json";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  // const remove = () => {KODUS --- kustutamine   .splice()}

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
          <button>Kustuta</button>
          <button>Muuda</button>
        </div>)}
    </div>
  )
}

export default MaintainProducts