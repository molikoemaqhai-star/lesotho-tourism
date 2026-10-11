import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Enquiry from "./pages/Enquiry";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;