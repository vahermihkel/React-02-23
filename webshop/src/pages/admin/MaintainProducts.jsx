import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const searchedRef = useRef();

  useEffect(() => {                                                      
    fetch(config.productsDbUrl)
      .then(response => response.json())
      .then(json => {
        setProducts(json || []); 
        setDbProducts(json || []);
      })
  }, []);

  //     0         1         2
  // [{"Ebay"}, {"Ebay"}, {"Ebay"}]
  const remove = (productId) => {
    // 244 toodet
    // index = 40
    const index = dbProducts.findIndex(element => element.id === productId);
    dbProducts.splice(index,1); // kustutan siit, sest siis kustub ka avalehel
    // setProducts(dbProducts.slice());
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
    searchFromProducts();
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length} pcs</div>
      {products.map((element, index) => 
        <div key={index} className={ element.active === true ? "active-product" : "inactive-product" }>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => remove(element.id)}>Kustuta</button>
          <Link to={"/admin/edit/" + element.id}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default MaintainProducts