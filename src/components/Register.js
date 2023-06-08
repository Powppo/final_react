import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo2 from '../static/logo2.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      navigate('/');
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  }
  
  return (
    <section>
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
                <img src={logo2} bg="dark" variant="dark" expand="lg"/>
                  <h1 className='sas'>Student Admission System</h1>
                <form onSubmit={ Register } className="box">
                <p className='has-text-centered'>{msg}</p>
                  <h4 className='title'>Register</h4>
                    <hr/>
                    <div className="field mt-5">
                        <label className="label">Name</label>
                        <div className="controls">
                            <input type="text" className="input is-rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div class="field mt-5">
                      <label className='label'>Email</label>
                      <p class="control has-icons-left has-icons-right">
                      <input type="text" className="input is-rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field mt-5">
                      <label className='label'> Password</label>
                      <p class="control has-icons-left  ">
                      <input type="password" className="input is-rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <span class="icon is-small is-left">
                          <i class="fas fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field mt-5">
                        <label className="label"> Confirm Password</label>
                        <div className="controls">
                            <input type="password" className="input is-rounded" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-black is-fullwidth is-rounded">Register</button>
                    </div>
                    <hr/>
                    <div className='turn'>
                      <a href='/'>
                        Already have an account?
                      </a>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
