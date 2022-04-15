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

  const handleSubmit = (e) => {
    e.preventDefault()
    getNewComment()
}

  return (
    <div>
        <h2>Comments</h2>
           <form className="submit-container" onSubmit={handleSubmit}>
               <input type="text" value={newComment.comment} onChange={handleChange} name={'comment'} placeholder={'Your comment here'} />
               <button>Submit</button>
           </form>
    </div>
  )
}

export default CommentsForm

