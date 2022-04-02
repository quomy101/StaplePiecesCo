import "./App.scss";
import React from "react";

// importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// importing pages
import Home from "./pages/Home";
import SliderData from "./components/home_components/SliderData";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home SliderData={SliderData} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
