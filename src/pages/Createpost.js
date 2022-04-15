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

 

  return (
    <div></div>
  )
}

export default P