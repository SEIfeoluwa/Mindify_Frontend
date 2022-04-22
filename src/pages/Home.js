import React from 'react'
import PostItem from '../components/PostItem'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react' 
import  MotivationComp  from '../components/MotivationComp'
import Client from '../services/api'

const Home = () => {
 const [posts, setPosts] = useState([])


 let navigate = useNavigate()  
    const showPost = (posts) => {  //after clicking on post it will go to PostDetails
        navigate(`/posts/postdetail/${posts.id}`)
    } 

const getPosts = async () => {
   const list = await Client.get(`posts`)
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
        <MotivationComp />
        </div>
        {posts.map((post) => (
        <div className="home-container" onClick={() => showPost(post)}
        key={post.id}>
        <PostItem
             title={post.title} 
             image={post.image}
             content={post.content}
             teacherId={post.teacher_id}
              />
        </div>
       ))}
     
    </div>
  )
}

export default Home