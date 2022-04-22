import Client from '../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReplyForm from '../components/ReplyForm'





const Question = ({ authenticated, teacher }) => {
    const [ questions, setQuestions] = useState([])
    const [ replies, setReplies ] = useState(true)

    const getQuestions = async () => {
        const list = await Client.get('questions')

        console.log(list.data)
        setQuestions(list.data)
    }

    useEffect(() => {
        const run = async () => {
            await getQuestions()
        }
        run()
        

    }, [replies])

    console.log(replies)

    return(
        <div>
            <div className="center">
                <h1>Ask a Question</h1>
            </div>
            <div className="newQ">
            <Link to={`/questions/new`}>Ask a Question</Link>
            </div>
            {questions.map((question) => (
                <div className="home-container" key={question.id}>
                    <div>
                        <h3>Name:</h3>
                        {question.user.name}
                    </div>
                    <h3>Question:</h3>
                    <p>{question.title}</p>
                    <p>{question.content}</p>
                    <div>
                        <h3>replies:</h3>
                        {question.replies.map((reply) => (
                            <p key={reply.content}>{reply.content}</p>
                        ))}
                    </div>
                    <div>
                    {authenticated && teacher ? <ReplyForm question={question} setReplies={setReplies} replies={replies}/> : null}
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default Question