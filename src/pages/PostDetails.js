import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Delete from './Delete'
import UpdatePost from './UpdatePost'

const PostDetails = (props) => {
  const [ selectedPost, setSelectedPost ] = useState('')

let { id } = useParams()
    const getPost = async () => {
        let result = await axios.get(`http://localhost:3001/posts/${id}`)
        console.log(result.data)
        setSelectedPost(result.data)
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div>
        <div className="post-details">
             <p>Title: {selectedPost.title}</p>
             <img src={selectedPost.image}/>
             <p> {selectedPost.bedrooms}</p>
             <br></br>
        </div>
     <Link className="add-comment" to={`/listings/${selectedPost._id}/commentsform`}>Add a comment here</Link>
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