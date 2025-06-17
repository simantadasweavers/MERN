import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


      <br />
        <Footer />
        
    </>
  )
}

export default App
