import React from 'react'
import BlogTitle from './BlogTitle'
import BlogContent from './BlogContent'
import './BlogPost.css'
const BlogPost = (props) => {
  return (
    <div className="BlogPost">
      <BlogTitle post={props.post} />
      <BlogContent post={props.post} />
    </div>
  )
}

export default BlogPost