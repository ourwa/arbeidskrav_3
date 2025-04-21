import React from "react";
import Members from "./members.js";
import MemberDetails from "./MemberDetails";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/member/:slug" element={<MemberDetails />} />
      </Routes>
    </>
  );
}

export default App;
