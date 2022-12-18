import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Error404 from "./components/Error404/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoria" element={<ItemListContainer/>} />
          <Route path="/item/detail/:id/:title" element={<ItemDetailContainer/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<Error404/>} /> 
        </Routes>
      </Router>

      <Cart/>

      
      <Footer />
    </div>
  );
}

export default App;
