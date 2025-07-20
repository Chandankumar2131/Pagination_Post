import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './BlogDetails.css';

export default function BlogDetails({ post }) {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = location.pathname.startsWith('/tags') || location.pathname.startsWith('/categories');

  return (
    <div className="card">
      {showBackButton && (
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      )}

      <p className="category">
        <NavLink to={`/categories/${post.category.replace(/\s+/g, "-")}`}>
          {post.category}
        </NavLink>
      </p>

      <p className="title">{post.title}</p>

      <p className="author">
        By <span>{post.author}</span> | Posted on <span>{post.date}</span>
      </p>

      <p className="content">{post.content}</p>

      <div className="tags">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replace(/\s+/g, "-")}`}>
            <span className="tag">#{tag}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
