import React from 'react'

const PostItem = (props) => {
  return (
    <div className="list-item">
    <p>Title: {props.title}</p>
    <img src={props.image}/>
    <p>: {props.content}</p>
    <br></br>
</div>
  )
}

export default PostItem