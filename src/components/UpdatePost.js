import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = (props) => {
    let { id } = useParams()
    let navigate = useNavigate()

 const [ title, setTitle ] = useState('')   
 const [ content, setContent ] = useState('')
 const [ image, setImgUrl ] = useState('')
 

 
const getPostToUpdate = async () => {
     await axios.put(`http://localhost:3001/posts/${id}`, {
     title: title,
     content: content,
     image: image,
     
    });
}

const handleSubmit= (e) => {
     e.preventDefault()
     getPostToUpdate()
     navigate('/postspage')
     window.location.reload(false)
}

  return (
    <div> Update Post:
       <form className="update-form" onSubmit={handleSubmit}>
        <input type="text" title="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
        <input type="text" title="title" onChange={(e)=>{setContent(e.target.value)}} placeholder="Content"/>
        <input type="text" image="image" onChange={(e)=>{setImgUrl(e.target.value)}}  placeholder="imgUrl"/>
      <button>Submit</button>
    </form>
    
    </div>
  )
}

export default Update