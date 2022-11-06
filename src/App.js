import React from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Comment from "./pages/Comment";
import CampDetails from "./pages/CampDetails";
import AddCamp from "./pages/AddCamp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcamp" element={<AddCamp />} />
        <Route path="/campdetails" element={<CampDetails />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
