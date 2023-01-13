import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Slider } from "./components/slider";
import { Header } from "./components/Header";
import "swiper/css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
