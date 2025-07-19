import React, { createContext, useEffect, useState } from "react";
import App from "../App";

const DataContext = createContext();

export function ContextApp({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState("");

  const fetchData = async (page=1,tag=null, category) => {
    setLoading(true)
    let baseUrl ='https://codehelp-apis.vercel.app/api/get-blogs'
     const url = `${baseUrl}?page=${page}`;
if(tag){
  url+=`&tag=${tag}`
}
if(category){
  url+=`&category=${category}`
}
    try {
     
      const res = await fetch(url);
      const finalData = await res.json();
      setPage(finalData.page)
      setPosts(finalData.posts);
      setTotalPages(finalData.totalPages);
    } catch (error) {
      console.log(error);
      setPage(1);
      setPosts([])
      setTotalPages(null)
    }
    setLoading(false)
  };

const handlePageChange=(page)=>{
    setPage(page);
    fetchData(page);
}
  const value={
        loading, 
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchData
      }
//   useEffect(() => {
//     fetchData();
//   }, []);
  return (
    <DataContext.Provider
      value={value}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
