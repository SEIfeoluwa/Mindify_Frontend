import { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from "../components/PostItem"
import { useNavigate } from 'react-router-dom'
import Delete from '../components/Delete'
import UpdatePost from '../components/UpdatePost'

const MyProfile = (props) => {
    const [posts, setPosts] = useState([])
    const [teacherInfo, setTeacherInfo] = useState()
    const teacherCallL = localStorage.getItem('user')
    const teacher = props.teacher
    
<<<<<<< HEAD
    console.log(teacherCallL)
    let navigate = useNavigate()
//  const teacherId = () => {
//           let res = 
//           console.log(res)
//         //   setTeacherCall(res)
//       }
//       teacherId();
=======
    // console.log(teacher)
    let navigate = useNavigate()

>>>>>>> main
    useEffect(() => {
       
      const makeApiCall = async () => {
        let res = await axios.get(`http://localhost:3001/posts/${teacherCallL}`)
        setPosts(res.data)
      }
      makeApiCall();
      const teacherCall = async () => {
        let res = await axios.get(`http://localhost:3001/${teacherCallL}`)
        // console.log(res.data)
        setTeacherInfo(res.data)
      }
      teacherCall();
      
    }, [])

<<<<<<< HEAD
    const showPost = (posts) => {  //after clicking on post it will go to PostDetails
        navigate(`posts/postdetail/${posts.id}`)
    } 
=======
    // const showPost = (posts) => {  //after clicking on post it will go to PostDetails
    //     navigate(`posts/postdetail/${posts.id}`)
    // } 
>>>>>>> main

    return (posts && teacherInfo) ? (
        <div>
            <div>
                <h1>{teacher.username}</h1>
            </div>
            <div >
                {posts.map((post) => (
                    <div className="home-container" 
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
                        <UpdatePost
                          postId={post.id}
                           />
                    </div>
                    </div>
                ))}
            </div>
        </div>
    ) : ( 
        <div></div>
    )
}

export default MyProfile


//onClick={() => showPost(post)}