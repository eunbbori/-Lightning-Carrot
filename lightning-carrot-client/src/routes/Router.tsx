import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/HomeView/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;