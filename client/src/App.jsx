import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import { CartPage, ProductsPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
