import React from 'react'
import { Link } from 'react-router-dom'
import PostItem from '../components/PostItem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react' 

const Home = () => {
 const [ posts, setPosts] = useState([])

 let navigate = useNavigate()  
    const showPost = (posts) => {  //after clicking on post it will go to PostDetails
        navigate(`posts/postdetail/${posts.id}`)
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
    <div>
    <div className="center">
        <h1>MINDIFY</h1>
        </div>
        {posts.map((post) => (
        <div className="home-container" onClick={() => showPost(post)}
        key={post.id}>
        <PostItem
             title={post.title} 
             image={post.image}
             content={post.content}
              />
        </div>
       ))}
       
    </div>
  )
}

export default Home