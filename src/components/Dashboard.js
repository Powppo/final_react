import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name)
    } catch (error) {
      
    }
  }
  return (
    <div className='container mt-5'>
        <h1>Welcome Back: {name} </h1>
    </div>
  )
}

export default Dashboard