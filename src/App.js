import React, { useState , useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Error404 from "./components/Error404/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import useFetch from "./hooks/useFetch";
import {urlApiProducts } from "./utils/constants/constants";
import {STORAGE_PRODUCTS_CART } from "./utils/constants/constants";
import Products from "./components/Products/Products";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const products = useFetch(urlApiProducts , null); //traigo los productos desde el archivo json
    //console.log(products); 

    useEffect(() => {
      getProductsCart();  
    }, [])

    const getProductsCart = () => {
      const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
      if (idsProducts) {
        const idsProductsSplit = idsProducts.split(',')
        setProductsCart(idsProductsSplit)
      } else {
        setProductsCart([])
      }
    }

    const [productsCart, setProductsCart] = useState ([]);

    //Función que añade productos al carrito
    const addProductCart = (id, title) => {
      //console.log(`Has añadido el producto ${title} con el ID: ${id} al carrito`);
      const idsProducts = productsCart;
      idsProducts.push(id);
      setProductsCart(idsProducts);
      localStorage.setItem(STORAGE_PRODUCTS_CART,productsCart)
      //console.log('Producto añadido');
      getProductsCart()
      // cambia el estado del carrito sin recargar la página 
      toast.success(`${title} añadido correctamente al carrito`);
    }
  

  return (
    <div className="App">
      <Router>
        <Navbar productsCart={productsCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoria" element={<ItemListContainer/>} />
          <Route path="/item/detail/:id/:title" element={<ItemDetailContainer/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<Error404/>} /> 
        </Routes>
      </Router>

      <Cart/>

      <Products products={products} addProductCart={addProductCart}/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      
      <Footer />
    </div>
  );
}

export default App;
