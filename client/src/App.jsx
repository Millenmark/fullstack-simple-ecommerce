import {Routes, Route} from "react-router-dom"
import { Navbar } from "./components"
import './App.css'
import { ProductsPage } from "./pages"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/products" element={<ProductsPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
