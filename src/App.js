import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import { sections, themeTitle } from "./components/theme/dataset";

function App() {
  
  return (
    <div className="App">
        <Header title={themeTitle} sections={sections} />
        <Home themeTitle={themeTitle} />
        <Footer
          themeTitle={themeTitle}
          description="All Rights Reserved | Powered by Cybros Developers | Dynamic solution provider"
        />
    </div>
  );
}

export default App;
