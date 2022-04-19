import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../components/Sidebar'

const CreatePost = () => {

  //let navigate = useNavigate()

  const [ newPost, setNewPost ] = useState({
    title: '',
    content: '',
    image: '',
  })

  let { id } = useParams()
 const getNewPost = async () => {
  console.log(newPost)
     await axios({
       url: `http://localhost:3001/posts/${id}`,
       method: 'post',
       data: newPost
     })
 }

 const handleChange = (e) => {
      setNewPost({...newPost, [e.target.name]: e.target.value })
     
      console.log(e.target.name)
      console.log(e.target.value)
 } 

 const submitFunc = () => {
    getNewPost()
   // navigate('/')
  //  window.location.reload(false)
 }

  return (

    <div className="s-container">
       <h2 className="new-post">Add A New Post</h2>
    <div>
       <SideBar />
        <form className="submit-form" onSubmit={submitFunc}> 
                  <input className="input" type="text" value={newPost.title} onChange={handleChange} name={'title'} placeholder={'title'} />
                  <input className="in-cont input" type="text" value={newPost.content} onChange={handleChange} name={'content'} placeholder={'content'} />
                  <input className="input" type="text" value={newPost.image} onChange={ handleChange} name={'image'} placeholder={'image url'} />
                  <button className="s-btn">Submit</button>
          </form>
    </div>
    </div>
  )
}

export default CreatePost