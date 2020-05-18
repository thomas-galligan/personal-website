import React from 'react'
import "./Blog.css"
import BlogPost from '../components/BlogPost/BlogPost'
const Blog = (props) => {
  return (
    <div className="Blog">
      <header>
        <h1>This is going to be my blog.</h1>
      </header>
      {blogPosts.map(post => <BlogPost post={post} key={post.title} />)}
    </div>
  )
}

// plan:
// file of .md documents. Write to script to convert these to a blogPost object,
// where `content` will be html.
const blogPosts = [{
  title: "a title",
  date: "02/12/1996",
  text: "Here is a blog post! lorem ipsum ..."
},
{
  title: "Another title",
  date: "05/05/2018",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}]

export default Blog