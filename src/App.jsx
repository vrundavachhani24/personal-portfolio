import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App


// https://www.w3schools.com/react/react_components.asp

// /home 
// /about