import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Delete from '../components/Delete'
import UpdatePost from '../components/UpdatePost'

const PostDetails = (props) => {
  const [ selectedPost, setSelectedPost ] = useState('')

let { id } = useParams()
    const getPost = async () => {
        let result = await axios.get(`http://localhost:3001/posts/postdetail/${id}`)
        console.log(result.data.indPost)
        setSelectedPost(result.data.indPost)
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div>
        <div className="post-details">
             <p>Title: {selectedPost.title}</p>
             <img src={selectedPost.image}/>
             <p> {selectedPost.content}</p>
             <br></br>
        </div>
     <Link className="add-comment" to={`/posts/${selectedPost.id}/commentsform`}>Add a comment here</Link>
              <br></br>
    <div>
        <Delete />
    </div>
    <div>
        <UpdatePost />
    </div>
    </div> 
  )
}

export default PostDetails