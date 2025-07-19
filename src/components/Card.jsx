import React from 'react'

export default function Card({title,author,category,date,content,tags}) {
  return (
    <div>
         <div className="post-title">
              <p>{title}</p>
            </div>

            <div className="post-meta">
              By <span>{author}</span> on <span>{category}</span>
            </div>

            <div className="post-meta">Posted on {date}</div>

            <div className="post-content">
              <p>{content}</p>
            </div>

            <div className="post-tags">
              {tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}
            </div>
    </div>
  )
}
