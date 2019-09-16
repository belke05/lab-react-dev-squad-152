import React from "react";
import "./App.css";
import SectionStudents from "./components/SectionStudents";
import Navbar from "./components/Navbar";
import SectionTopicsToRecap from "./components/SectionTopicsToRecap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionStudents />
      <SectionTopicsToRecap />
    </div>
  );
}

export default App;
