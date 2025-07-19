import React, { useContext, useEffect } from "react";
import PostData from "./components/PostData";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import DataContext from "./contextApp/ContextApp";
import './App.css'; // <-- import here
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import BlogsPage from "./components/CategoryPage"
import CategoryPage from "./components/CategoryPage"
import TagsPage from "./components/TagsPage"
export default function App() {
  const { fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId"element={<BlogsPage/>}/>
      <Route path="/tags/:tag"element={<TagsPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>

    </Routes>
  );
}
