import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/Sidebar'

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
    navigate('/')
    window.location.reload(false)
 }

  return (

    <div className="s-container">
       <h2 className="new-post">Add A New Post</h2>
  
    <div>
      <SideBar />
       <h2>Add A New Post</h2>

          <form className="submit-form" onSubmit={handleSubmit}> 
                  <input className="input" type="text" value={newPost.title} onChange={handleChange} name={'title'} placeholder={'title'} />
                  <input className="in-cont input" type="text" value={newPost.content} onChange={handleChange} name={'content'} placeholder={'content'} />
                  <input className="input" type="text" value={newPost.image} onChange={ handleChange} name={'image'} placeholder={'image url'} />
                  <button>Submit</button>
          </form>
    </div>
    </div>
  )
}

export default CreatePost