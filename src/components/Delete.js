import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Delete = (props) => {
  
  let navigate = useNavigate()

  const deletePost = async () => {
        await axios.delete(`http://localhost:3001/posts/${props.postId}`);
  }

   const handleDelete = () => {
      deletePost()
       navigate('/home')
       window.location.reload(false)
   }

  return (
    <div className='centered'>
    <button className="s-btn" onClick={handleDelete}>Delete Post</button>
    </div>
  )
}

export default Delete