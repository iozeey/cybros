import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";

const sections = [
  { title: "Home", url: "#home" },
  { title: "Our Services", url: "#services" },
  { title: "Portfolio", url: "#portfolio" },
  { title: "About Us", url: "#about" },
  { title: "Contact Us", url: "#contact" },
];
function App() {
  return (
    <div className="App">
        <Header title="Cybros" sections={sections} />
        <Home />
        <Footer
          title="Cybros. Development"
          description="Something here to give the footer a purpose!"
        />
    </div>
  );
}

export default App;
