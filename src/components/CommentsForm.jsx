import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CommentsForm = () => {

const [newComment, setNewComment ] = useState({
    comment: ''
})
 
let { id } = useParams()

  const getNewComment = async () => {
      await axios({
          url: `http://localhost:3001/posts/${id}`,
          method: 'post',
          data: newComment
      })
  }

  const handleChange = (e) => {
      setNewComment({...newComment, [e.target.name]: e.target.value })
      console.log(e.target.name)
      console.log(e.target.value)
  }

  return (
    <div>CommentsForm</div>
  )
}

export default CommentsForm

