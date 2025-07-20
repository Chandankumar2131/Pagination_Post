import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataContext from "../contextApp/ContextApp";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

export default function BlogsPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const { setLoading, loading } = useContext(DataContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}?blogId=${blogId}`);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs || []);
    } catch (error) {
      console.log("Error fetching blog:", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Blog Found</p>
        </div>
      )}
    </div>
  );
}
