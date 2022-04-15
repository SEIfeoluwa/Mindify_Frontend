import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
          name: formValues.name,
          email:formValues.email,
          password:formValues.password
        })
        setFormValues({
          name: '',
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

        </div>
    )
}

export default Register