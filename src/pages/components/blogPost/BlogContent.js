import React from 'react'
import "./BlogContent.css"
import { Chip } from '@material-ui/core'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

const BlogContent = (props) => {
  return (
    <div className="BlogContent">
      <p>{props.post.text}</p>
      <div className="taglist">
        {props.post.tags.map(tag => (<Chip icon={<LocalOfferIcon />} label={tag} key={tag} size="small" className="Chip" />))}
      </div>
    </div>
  )
}

export default BlogContent