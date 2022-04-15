import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Delete = () => {
  
  let { id } = useParams()
  let navigate = useNavigate()

  const deletePost = async () => {
        await axios.delete(`http://localhost:3001/posts/${id}`);
  }

   const handleDelete = () => {
      deletePost()
       navigate('/postspage')
   }

  return (
    <div>
    <button className="del-btn" onClick={handleDelete}>Delete Post</button>
    </div>
  )
}

export default Delete