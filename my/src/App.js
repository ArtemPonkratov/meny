import React from "react";
import "./App.css";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import About from "../Component/About"; // Используйте правильный путь
import Delivery from "../Component/Delivery"; // Используйте правильный путь

function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path="/about" Component={<About />} />
        <Route path="/delivery" Component={<Delivery />} />
      </Routes>
    </div>
  );
}

export default App;
