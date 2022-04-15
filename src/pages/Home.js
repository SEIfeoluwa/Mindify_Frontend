import React from 'react'
import { Link } from 'react-router-dom'
import PostItem from './PostDetails'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react' 

const Home = () => {
 const [ posts, setPosts] = useState([])

 let navigate = useNavigate()  
    const showPost = (posts) => {  //after clicking on post it will go to PostDetails
        navigate(`${posts.id}`)
    } 

const getPosts = async () => {
   const list = await axios.get(`http://localhost:3001/posts`)
   console.log(list.data)
   setPosts(list.data)
}

useEffect(() => {
    getPosts()
 }, [])

  return (
    <div className="home-container">
        <h1>Mindify</h1>
         <h3>For the Body and the Soul</h3>
       {posts.map((post) => (
        <div className="post-container" onClick={() => showPost(post)}
        key={post.id}>
        <PostItem
             title={post.id}
             image={post.image}
             content={post.content}
              />
        </div>
       ))}
       
    </div>
  )
}

export default Home