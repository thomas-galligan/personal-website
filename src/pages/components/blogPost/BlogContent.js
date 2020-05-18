import React from 'react'
import "./BlogContent.css"
const BlogContent = (props) => {
  return (
    <div className="BlogContent">
      <p>{props.post.text}</p>
    </div>
  )
}

export default BlogContent