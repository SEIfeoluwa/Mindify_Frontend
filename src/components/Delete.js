import React from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { environment } from '..'



const Delete = (props) => {
  
  let navigate = useNavigate()

  const deletePost = async () => {
        await Axios.delete(`posts/${props.postId}`);
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