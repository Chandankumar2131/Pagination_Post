import React, { useContext, useEffect } from "react";
import PostData from "./components/PostData";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import DataContext from "./contextApp/ContextApp";
import './App.css'; // <-- import here

export default function App() {
  const { fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <PostData />
      <Pagination />
    </div>
  );
}
