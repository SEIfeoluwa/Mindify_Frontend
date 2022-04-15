import React from 'react'
import { Link } from 'react-router-dom'
import PostDetails from './PostDetails'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react' 

const Home = () => {
 const [ posts, setPosts] = useState([])

 let navigate = useNavigate()
    const showPost = (posts) => {
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
        <PostDetails
             title={posts.id}
             image={post.image}
              />
        </div>
       ))}
       
    </div>
  )
}

export default Home