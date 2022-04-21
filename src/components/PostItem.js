import React from 'react'

const PostItem = (props) => {
  return (
    <div className="list-item">
    <p className="post-title"> {props.title}</p>
    <img src={props.image} alt="Post"/>
    <br></br>
    <p className="post-content"> {props.content}</p>
    <br></br>
</div>
  )
}

export default PostItem