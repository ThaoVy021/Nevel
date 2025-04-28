import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Items1 from "./pages/items1"
import Header from "./component/common/header"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "./component/common/footer"
import Items2 from "./pages/items2"
import Items3 from "./pages/items3"
import Items4 from "./pages/items4/ndex"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items1" element={<Items1 />} />
            <Route path="/items2" element={<Items2 />} />
            <Route path="/items3" element={<Items3 />} />
            <Route path="/items4" element={<Items4 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
