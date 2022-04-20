import { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from "../components/PostItem"
import { Navigate } from 'react-router-dom'
import Delete from '../components/Delete'
import UpdatePost from '../components/UpdatePost'

const MyProfile = (props) => {
    const [posts, setPosts] = useState([])
    const [teacherInfo, setTeacherInfo] = useState()
    const teacher = props.teacher
    
    // console.log(teacher)

    useEffect(() => {
      const makeApiCall = async () => {
        let res = await axios.get(`http://localhost:3001/posts/${teacher.id}`)
        setPosts(res.data)
      }
      makeApiCall();
      const teacherCall = async () => {
        let res = await axios.get(`http://localhost:3001/${teacher.id}`)
        console.log(res.data)
        setTeacherInfo(res.data)
      }
      teacherCall();
    }, [])

    const showPost = (posts) => {  //after clicking on post it will go to PostDetails
        Navigate(`posts/postdetail/${posts.id}`)
    } 

    return (
        <div>
            <div>
                <h1>{teacher.username}</h1>
            </div>
            <div >
                {posts.map((post) => (
                    <div className="home-container" onClick={() => showPost(post)}
                    key={post.id}>
                    <PostItem 
                        content={post.content}
                        image={post.image}
                        {...post}
                    />
                    <div>
                        <Delete 
                        postId={post.id}
                        />
                    </div>
                    <div>
                        <UpdatePost />
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyProfile