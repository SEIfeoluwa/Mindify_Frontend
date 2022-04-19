import { useState, useEffect } from 'react'
import Axios from 'axios'
import PostItem from "../components/PostItem"
import Sidebar from "../components/Sidebar"
import Delete from '../components/Delete'
import UpdatePost from '../components/UpdatePost'


const MyProfile = (props) => {
    const [posts, setPosts] = useState([])
    const teacher = props.teacher
    
    console.log(teacher)
    useEffect(() => {
      const makeApiCall = async () => {
        let res = await Axios.get(`http://localhost:3001/posts/${teacher.id}`)
        setPosts(res.data.posts)
      }
      makeApiCall();
    }, [])

    return (
        <div>
            <Sidebar />
            <div>
                <h1>{teacher.username}</h1>
                <h2>{teacher.firstName}{teacher.lastName}</h2>
                <p>{teacher.experience}</p>
                <p>{teacher.about}</p>
            </div>
            <div className="posts">
                {posts.map((post) => (
                <PostItem 
                    key={post._id}
                    post={post.content}
                    // user={tweet.user_id}
                    timeStamp={post.createdAt}
                    {...post}
                />
                ))}
            </div>
            <div>
                <Delete />
            </div>
            <div>
                <UpdatePost />
            </div>
        </div>
    )
}

export default MyProfile