import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
const Register = ({setshowLogin}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const response = await axios.post('http://localhost:5014/register', formData)
      if (response.data.message === "User registered successfully") {
        setMessage('Registration successful! Redirecting to login...')
        setTimeout(() => {
          navigate('/')
        }, 2000)
      } else {
        setMessage(response.data.message)
      }
    } catch (error) {
      setMessage('Registration failed. Please try again.')
      console.error('Registration error:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='register-popup'>
      <form className='register-popup-container' onSubmit={handleSubmit}>
         <div className="register-popup-title">
          <h2>Sign Up</h2>
          {setshowLogin && <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="Close" />}
        </div>
         <div className="register-popup-inputs">
           <input type="text" name="name" placeholder='Your name' value={formData.name} onChange={handleChange} required/>
           <input type="email" name="email" placeholder='Your email' value={formData.email} onChange={handleChange} required/>
           <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required/>
         </div>
          <button type="submit">Submit</button>
         <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>To continue, Accept the terms and condition</p>
         </div>
         <p>Already have an Account? <Link to="/"><span>Login Here</span></Link></p>
      </form>
    </div>
  )
}

export default Register