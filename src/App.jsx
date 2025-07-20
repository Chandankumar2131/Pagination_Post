import React, { useContext, useEffect } from "react";
import PostData from "./components/PostData";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import DataContext from "./contextApp/ContextApp";
import './App.css'; // <-- import here
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home"
import BlogsPage from "./pages/BlogsPage"
import CategoryPage from "./pages/CategoryPage"
import TagsPage from "./pages/TagsPage"
export default function App() {
  const { fetchData } = useContext(DataContext);

  const[searchParams, setSearchParams]= useSearchParams();
  const location = useLocation();
  
  useEffect(() => {
    
    const page= searchParams.get("page")??1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category);
    } else{
      fetchData(Number(page));
    }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId"element={<BlogsPage/>}/>
      <Route path="/tags/:tag"element={<TagsPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>

    </Routes>
  );
}
