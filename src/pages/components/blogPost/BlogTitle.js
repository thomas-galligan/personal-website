import React from 'react'
import './BlogTitle.css'
const BlogTitle = (props) => {
  return (
    <div className="BlogTitle">
      <p className="title">{props.post.title}</p>
      <p className="date">{props.post.date}</p>
    </div>
  )
}

export default BlogTitle