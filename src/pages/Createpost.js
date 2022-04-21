import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/Sidebar'

const CreatePost = (props) => {

  const teacher = props.teacher
  console.log(teacher)

  let navigate = useNavigate()

  const [ newPost, setNewPost ] = useState({
    title: '',
    tag: '',
    content: '',
    image: '',
  })

//  const getNewPost = async () => {
//      await 
//  }

 const handleChange = (e) => {
      setNewPost({...newPost, [e.target.name]: e.target.value })
      console.log(newPost)
 } 

 const handleSubmit = (e) => {
   e.preventDefault()
    // getNewPost()
   axios({
       url: `http://localhost:3001/posts/${teacher.id}`,
       method: 'post',
       data: newPost
     })

    // navigate('/')
    // window.location.reload(false)
 }

  return (

    <div className="s-container">
       <h2 className="new-post">Add A New Post</h2>
    <div>

      <SideBar />
       

          <form className="submit-form" onSubmit={handleSubmit}> 
                  <input className="input" type="text" value={newPost.title} onChange={handleChange} name={'title'} placeholder={'title'} />
                  <input className="input" type="text" value={newPost.tag} onChange={handleChange} name={'tag'} placeholder={'tags'} />
                  <input className="in-cont input" type="text" value={newPost.content} onChange={handleChange} name={'content'} placeholder={'content'} />
                  <input className="input" type="text" value={newPost.image} onChange={ handleChange} name={'image'} placeholder={'image url'} />
                  <button className="s-btn">Submit</button>
          </form>
    </div>
    </div>
  )
}

export default CreatePost