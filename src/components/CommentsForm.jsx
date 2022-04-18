import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const CommentsForm = () => {



const [newComment, setNewComment ] = useState({
    name: '',
    comment: '',
    post_id: []
})
 
let { id } = useParams()
  

  const getNewComment = async () => {
      console.log(newComment)
      await axios({
          url: `http://localhost:3001/comments/${id}`,
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
   <div className="comment-container">
        <h2 className="comment-form">Add Your Comment</h2>
           <form className="submit-container" onSubmit={handleSubmit}>
           <input type="text" value={newComment.name} onChange={handleChange} name={'name'} placeholder={'Your name here'} />
               <input type="text" value={newComment.comment} onChange={handleChange} name={'comment'} placeholder={'Your comment here'} />
               <button>Submit</button>
           </form>
    </div>
  )
}

export default CommentsForm

