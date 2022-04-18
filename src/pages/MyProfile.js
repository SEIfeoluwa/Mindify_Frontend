import PostItem from "../components/PostItem"
import Sidebar from "../components/Sidebar"


const MyProfile = (props) => {
    const [teacher, setTeacher] = useState()
    const [posts, setPosts] = useState([])

    const data = () => {
        const teacherData = props.teacher
        setTeacher(teacherData)
    }

    useEffect(() => {
      const makeApiCall = async () => {
        let res = await axios.get('http://localhost:3001/')
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
                    {...tweet}
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