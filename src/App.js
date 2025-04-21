import React from "react";
import Members from "./Members";
import MemberDetails from "./MemberDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Members />} />
      <Route path="/member/:slug" element={<MemberDetails />} />
    </Routes>
  );
}

export default App;
