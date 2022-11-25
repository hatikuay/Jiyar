import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Car from "./Car";
import AnotherScreen from "./AnotherScreen";
import { Routes, Route } from "react-router";
import Garage from "./Garage";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Garage></Garage>
        </header>
      </div>
    </>
  );
}

export default App;
