import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/HomeView/Home";
import AddProduct from "./../views/AddPostView/AddProductView/AddProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addPost/product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
