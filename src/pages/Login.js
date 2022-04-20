import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import Sidebar from '../components/Sidebar'

const Login = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
        username: "",
        password: "",
        })
        console.log(payload.id)
        localStorage.setItem('user', payload.id)
        props.setTeacher(payload)
        props.toggleAuthenticated(true)
        // navigate('/')
    }
    return (
        <div>
            <Sidebar />
            <div className='login centered'> 
                <form className='log' onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='email'>Username</label>
                        <input 
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="Your Username"
                            value={formValues.username}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formValues.password}
                        required
                        />
                    </div>
                    <button disabled={!formValues.username || !formValues.password}>Log In</button>
                </form> 
            </div>
        </div>
    )
}

export default Login