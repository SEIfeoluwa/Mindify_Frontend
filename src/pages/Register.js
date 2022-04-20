import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          username: formValues.username,
          email:formValues.email,
          password:formValues.password
        })
        setFormValues({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''})
        navigate('/login')
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Sidebar />
            <div className="card-overlay centered">
            <h1 className="reg-title">MINDIFY</h1>
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="name">First Name</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        placeholder="Your Name"
                        value={formValues.firstName}
                        required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="name">Last Name</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                        placeholder="Your Name"
                        value={formValues.lastName}
                        required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        name="username"
                        type="text"
                        placeholder="Your Name"
                        value={formValues.username}
                        required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={formValues.email}
                        required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formValues.confirmPassword}
                        required
                        />
                    </div>
                    <button className="s-btn1"
                        disabled={
                        !formValues.email ||
                        (!formValues.password &&
                            formValues.confirmPassword === formValues.password)
                        }
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register