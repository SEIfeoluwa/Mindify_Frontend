import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CommentsItem from '../components/CommentsItem'
import { environment } from '..'

const PostDetails = (props) => {
  const [ selectedPost, setSelectedPost ] = useState()
  const [comments, setComment] = useState()


let { id } = useParams()
    const getPost = async () => {
        const result = await axios.get(`${environment.apiUrl}posts/postdetail/${id}`)
        console.log(result.data.getComments)
        setSelectedPost(result.data.indPost)
        setComment(result.data.getComments)
    }
    

    useEffect(() => {
        getPost()
     
    }, [])

  return ( selectedPost && comments ) ? (
   <div className="post-details">
       <p className="post-title">Title: {selectedPost.title}</p>
             <img src={selectedPost.image}/>
             <br></br>
                  <p className="post-content"> {selectedPost.content}</p>
             <br></br>
   <div className="comment-container">
        <h3 className="post-title">Comments</h3>
              {comments.map((comment) => (
                   <div className="post-container" key={comment.id}>
                         <CommentsItem
                            name={comment.name} 
                            content={comment.content}
                           />
                    </div>
                    ))} 
            
        </div> 
        
     <Link className="add-comment" to={`/posts/postdetail/${selectedPost.id}/commentsform`}>Add a comment here</Link>
              <br></br>
        </div> 
  ) : ( <div></div>)
}

export default PostDetails