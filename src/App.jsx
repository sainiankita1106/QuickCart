import { Routes,Route } from "react-router-dom"
import {Cart} from './pages/Cart'
import { ProductList } from "./pages/ProductList"
import './App.css'
import { ProductDetail } from "./pages/ProductDetail"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="/product-details/:id" element={<ProductDetail/>}/>
    </Routes>
    </>
  )
}
export default App
