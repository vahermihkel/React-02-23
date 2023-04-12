import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../../css/Cart.css";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json))
  }, []);

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeFromCart = (index) => {
    cart.splice(index,1);
    setCart(cart.slice()); 
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const summary = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum.toFixed(2);
  }

  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const paymentData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": summary(),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e74a0" + Math.random() * 9999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://mihkel-webshop-0223.web.app"
    };

    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

      fetch(paymentUrl, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
        .then(res => res.json())
        .then(json => window.location.href = json.payment_link);
  }

  return (
    <div>
      {cart.length > 0 && 
        <div className="cart-top">
          <div>Total different items: {cart.length}</div>
          <Button onClick={emptyCart} variant="outlined">Empty cart</Button>
        </div>}
      {cart.map((element, index) => 
        <div className="product" key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <div>{element.quantity} pcs</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className="total">{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
        </div> )}
      {cart.length === 0 && 
        <div>
          Cart is empty. <br /> <br />
          <Link to="/" >Add products</Link> <br />
        </div>}
      {cart.length > 0 &&
        <div className="cart-bottom">
          <div className="sum">Subtotal: {summary()} €</div>
          <select>{parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>
          {/* radio button  && smartpostpm uus select  */}
          <button onClick={pay}>Pay</button>
        </div>
      }
    </div>
  )
}

export default Cart