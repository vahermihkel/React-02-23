import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function SingleProduct() {
  // VEEBIPOE NÄITE PÕHJAL: ühe toote võtmise
  // 1. App.js sees URL, kus võtan /:id
  // 2. HomePage sees pean tegema siia lehele sattumise läbi <Link>
  // 3. Siin lehel pean useParams abil selle ID võtma
  // 4. .find() <--- see on erinev võrreldes eesti keelse veebipoega
  //   sarnane EditProduct.js loogikaga
  // 5. HTMLs välja kuvama
  const { id } = useParams();       // ["Nobe", "Tesla", "Nobe"]
  const [dbProducts, setDbProducts] = useState([]);
  const found = dbProducts.find(product => product.id === Number(id));  // 1 toote  "Nobe"    
          //productsFromFile.filter(product => product.id === Number(id))[0]; // toodete hunniku  ["Nobe", "Nobe"]
          //productsFromFile.findIndex(product => product.id === Number(id)); // 1 toote järjekorranumbri   0
  
  useEffect(() => {                                                      
    fetch(config.productsDbUrl)
      .then(response => response.json())
      .then(json => {
        setDbProducts(json || []);
      })
  }, []);

  return (
    <div>
      {found !== undefined && 
        <div>
          <img src={found.image} alt="" />
          <div>ID:{found.id} </div>
          <div>Name: {found.name}</div>
          <div>Description: {found.description}</div>      
          <div>Category: {found.category}</div>
          <div>Price: {found.price}</div>
        </div>}
        {found === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default SingleProduct