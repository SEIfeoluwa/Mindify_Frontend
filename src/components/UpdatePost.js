import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = (props) => {
    //let { id } = useParams()
    let navigate = useNavigate()

 const [ title, setTitle ] = useState('')   
 const [ content, setContent ] = useState('')
 const [ image, setImgUrl ] = useState('')
 

 
const getPostToUpdate = async () => {
     await axios.put(`http://localhost:3001/posts/${props.postId}`, {
     title: title,
     content: content,
     image: image,
     
    });

}

const handleSubmit= (e) => {
     e.preventDefault()
     getPostToUpdate()
     navigate('/')
     window.location.reload(false)
}

  return (
    <div className="comment-container"> 
        <h2 className="comment-form">Update Your post</h2>
       <form className="submit-container" onSubmit={handleSubmit}>
        <input className="input" type="text" title="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
        <input className="input" type="text" title="title" onChange={(e)=>{setContent(e.target.value)}} placeholder="Content"/>
        <input className="input" type="text" image="image" onChange={(e)=>{setImgUrl(e.target.value)}}  placeholder="imgUrl"/>
      <button className="s-btn">Submit</button>
    </form>
    
    </div>
  )
}

export default Update