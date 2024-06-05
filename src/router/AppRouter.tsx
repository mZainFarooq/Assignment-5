import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
