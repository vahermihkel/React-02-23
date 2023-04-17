import React, { useContext, useEffect, useState } from 'react'
// import productsFromFile from "../../data/products.json";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import config from "../../data/config.json";
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import { CartSumContext } from "../../store/CartSumContext";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { setCartSum } = useContext(CartSumContext);

  // uef
  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(response => response.json())
      .then(json => setCategories(json || []))

    fetch(config.productsDbUrl)
      .then(response => response.json())
      .then(json => {
        setProducts(json || []);  // null || []        null - on tühjus
        setDbProducts(json || []); //  [].length    [].map()   annavad errori:   null.length    null.map() 
      })
  }, []);

  // "".startsWith()  "".endsWith()    "".toUpperCase()
  // [][0]   [].map()   [].filter()

 

  const addProductToCart = (productClicked) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) { // (index !== -1)
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      cart.push({"product": productClicked, "quantity": 1});
    }

    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    setCartSum(sum.toFixed(2));

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  

  return (
    <div>
      <SortButtons products={products} setProducts={setProducts} />
      <div>{products.length} pcs</div>
      <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />
      {products.filter(element => element.active === true).map(element => 
        <div key={element.id}>
          <Link to={"/product/" + element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
          </Link>
          <Button variant="contained" onClick={() => addProductToCart(element)}>Lisa ostukorvi</Button>
        </div>)}
    </div>
  )
}

export default HomePage