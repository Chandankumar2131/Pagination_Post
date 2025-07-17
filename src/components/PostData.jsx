import React, { useContext } from 'react';
import DataContext from '../contextApp/ContextApp';
import './PostData.css'; // make sure this path is correct

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
          <div key={post.id} className="post-card">
            <div className="post-title">
              <p>{post.title}</p>
            </div>

            <div className="post-meta">
              By <span>{post.author}</span> on <span>{post.category}</span>
            </div>

            <div className="post-meta">Posted on {post.date}</div>

            <div className="post-content">
              <p>{post.content}</p>
            </div>

            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
