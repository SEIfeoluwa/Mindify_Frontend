import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

console.log('hello')

const CommentsForm = () => {



const [newComment, setNewComment ] = useState({
    name: '',
    content: '',
    postId: []
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

  const submitForm = (e) => {
    e.preventDefault()
    console.log('I am in the handle submit')
    getNewComment()
    
}

  return (
   <div className="comment-container">
        <h2 className="comment-form">Add Your Comment</h2>
           <form className="submit-container" onSubmit={submitForm}>
           <input type="text" value={newComment.name} onChange={handleChange} name={'name'} placeholder={'Your name here'} />
               <input type="text" value={newComment.content} onChange={handleChange} name={'content'} placeholder={'Your comment here'} />
               <button>Submit</button>
           </form>
    </div>
  )
}

export default CommentsForm

