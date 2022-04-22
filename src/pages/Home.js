import React from 'react'
import PostItem from '../components/PostItem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react' 

<<<<<<< HEAD
=======
import  MotivationComp  from '../components/MotivationComp'

import { environment } from '..'
>>>>>>> ffe1be0e1804071b8fe75d763e7fc27cf3131e34



const Home = () => {
 const [posts, setPosts] = useState([])
//  const [teacherInfo, setTeacherInfo] = useState()

console.log(environment.apiUrl)

 let navigate = useNavigate()  
    const showPost = (posts) => {  //after clicking on post it will go to PostDetails
        navigate(`/posts/postdetail/${posts.id}`)
    } 

const getPosts = async () => {
   const list = await Axios.get(`posts`)
   console.log(list.data)
   setPosts(list.data)
}

  
  // const getTeacherName = async () => {
  //   let res = await axios.get(`${environment.apiUrl}${posts.teacherId}`)
  //   console.log(res.data)
  //   setTeacherInfo(res.data)
  // }

useEffect(() => {
    getPosts()
    // getTeacherName()
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