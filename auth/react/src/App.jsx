import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Route, Router, Routes } from "react-router";

function App() {

  return (
    <>
      
        <Header />
        <br />
        <br />

        {/* <Home /> */}

        

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <br />
        <Footer />
        
    </>
  )
}

export default App
