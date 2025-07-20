import React, { useContext } from 'react';
import DataContext from '../contextApp/ContextApp';
import './PostData.css'; // make sure this path is correct
import BlogDetails from './BlogDetails';

export default function PostData() {
  const { posts, loading } = useContext(DataContext);

  return (
    <div className="container">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : posts.length === 0 ? (
        <div className="no-posts">
          <p>No Post</p>
        </div>
      ) : (
        posts.map((post) => (
         <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
  );
}
