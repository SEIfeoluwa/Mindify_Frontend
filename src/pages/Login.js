import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import Sidebar from '../components/Sidebar'

const Login = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
        email: "",
        password: "",
        })
        props.setUser(payload)
        props.toggleAuthenticated(true)
        navigate('/')
    }
    return (
        <div>
            <Sidebar />
            <div className='login'> 
                <form className='log' onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="YourEmail@example.com"
                            value={formValues.email}
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
                    <button disabled={!formValues.email || !formValues.password}>Log In</button>
                </form> 
            </div>
        </div>
    )
}

export default Login