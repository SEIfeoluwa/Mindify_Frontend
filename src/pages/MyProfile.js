import { useState, useEffect } from 'react'
import Client from '../services/api'
import PostItem from "../components/PostItem"
import { useNavigate } from 'react-router-dom'
import Delete from '../components/Delete'
import UpdatePost from '../components/UpdatePost'


const MyProfile = (props) => {
    const [posts, setPosts] = useState([])
    const [teacherInfo, setTeacherInfo] = useState()
    const teacherCallL = localStorage.getItem('user')
    const teacher = props.teacher
    const teachId = parseInt(teacherCallL)
    

    useEffect(() => {
       
      const makeApiCall = async () => {
        let res = await Client.get(`posts/${teacherCallL}`)
        console.log(res)
        setPosts(res.data)
      }
      makeApiCall();
      const teacherCall = async () => {
        let res = await Client.get(`${teacherCallL}`)
        console.log(res)
        setTeacherInfo(res.data)
      }
      teacherCall();
      
    }, [])


    return (posts && teacherInfo) ? (
        <div>
            <div>
                <h1>{teacher.username}</h1>
            </div>
            <div >
                {posts.map((post) => (
                    <div className="home-container" 
                    key={post.id}>
                    <div>
                    <PostItem 
                        content={post.content}
                        image={post.image}
                        {...post}
                    />
                    </div>
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
        <div>Your Posts Will Appear Here</div>
    )
}

export default MyProfile
