import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom"
import ProducList from "./ProducList";

function App() {
  return (
    <div className="App">
   
      <Header />
      <Routes>
        <Route path="/" element={<ProducList />} />
      </Routes>
 
    </div>
  );
}

export default App;
