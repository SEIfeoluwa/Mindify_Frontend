import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  let navigate = useNavigate()

  const [ newPost, setNewPost ] = useState({
    title: '',
    content: '',
    image: '',
  })

 const getNewPost = async () => {
     await axios({
       url: `http://localhost:3001/posts`,
       method: 'post',
       data: newPost
     })
 }

 const handleChange = (e) => {
      setNewPost({...newPost, [e.target.name]: e.target.value })
      console.log(newPost)
 } 

 const handleSubmit = () => {
    getNewPost()
    navigate('/postspage')
    window.location.reload(false)
 }

  return (
    <div>
       <h2>Add A New Listing</h2>
          <form className="submit-form" onSubmit={handleSubmit}> 
                  <input type="text" value={newPost.city} onChange={handleChange} name={'title'} placeholder={'title'} />
                  <input type="text" value={newPost.content} onChange={handleChange} name={'content'} placeholder={'content'} />
                  <input type="text" value={newPost.image} onChange={ handleChange} name={'image'} placeholder={'image'} />
                  <button>Submit</button>
          </form>
    </div>
  )
}

export default CreatePost