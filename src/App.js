import logo from "./logo.svg";
import React from "react";

import "./App.css";
import Home from "./Pages/home"; // Renamed 'home' to 'Home'

function App() {
  return (
    <>
      <React.Fragment>
        <Home /> {/* Renamed 'home' to 'Home' */}
      </React.Fragment>
    </>
  );
}

export default App;
