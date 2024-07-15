import Home from "../src/Components/Home";
import Faq from "../src/Components/Faq";
import About from "../src/Components/About";
import Layout from "../src/Components/Layout";
import Contact from "../src/Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
