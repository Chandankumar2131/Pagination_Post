import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import DataContext from '../contextApp/ContextApp';
import Header from '../components/Header';

export default function BlogsPage() {
    const[blog,setBlog]= useState(null);
    const[reletedBlogs,setReletedBlogs]=useState([]);
    const location=useLocation();
    const navigation= useNavigation();

    const{setLoading,loading}= useContext(DataContext);
const blogId = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs() {
        const baseUrl='https://codehelp-apis.vercel.app/api/get-blogs';
setLoading(true);
let url = `${baseUrl}?blogId=${blogId}`;
try {
    const res = await fetch(url);
    const data = await res.json();
    setBlog(data.blog);
    setReletedBlogs(data.reletedBlogs);
} catch (error) {
    console.log("Error");
    setBlog(null);
    setReletedBlogs([]);
}
setLoading(false)
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div>
<Header/>
<div>
    <button onClick={()=>navigation(-1)}>
        Back
    </button>
</div>
{
    loading ?(<div>
         <p>Loading...</p>
    </div> ):
    blog?
    (<BlogDetails post={blog}/>):
    
    (<div><p>No-Blog Foumd</p></div>)
}
    </div>
  )
}
