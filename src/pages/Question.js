import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Question = () => {
const [questions, setQuestions] = useState([])



    const getQuestions = async () => {
        const list = await axios.get(`http://localhost:3001/questions`)
        console.log(list.data)
        setQuestions(list.data)
    }

    getQuestions()

    return(
        <div>
            <div className="center">
        <h1>Questions</h1>
        </div>
        </div>
    )
}

export default Question