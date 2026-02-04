import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Fruits from "./pages/fruits/Fruits.jsx"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
