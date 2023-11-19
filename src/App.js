import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import { About } from "./component/About";
import Contacto from "./component/Contacto";

function App() {

 

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Productos" element={<Products />} />
          <Route exact path="/Productos/:IdProducto" element={<Product />} />
          <Route exact path="/AcercaDe" element={<About />} />
          <Route exact path="/Contacto" element={<Contacto />} />
          <Route exact path="/Carrito" element={<Cart />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
