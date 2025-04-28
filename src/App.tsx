import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Items1 from "./pages/items1"
import Header from "./component/common/header"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "./component/common/footer"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items1" element={<Items1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
