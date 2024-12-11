import React from "react";
import ProductsCart from "../components/ProductsCart";

const Cart = () => {
    const productos = localStorage.getItem('cart');
    console.log(productos)
  return (
    <ProductsCart 
      productos = {productos}
    />
  );
}

export default Cart;