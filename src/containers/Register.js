import React, { useState, Component} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./cssFolders/Auth.css";
import logo2 from '../static/logo2.png';
import "./cssFolders/glitch.css";

import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import CSRFToken from '../components/CSRFToken';

const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    });
    const [accountCreated, setAccountCreated] = useState(false);

    const { username, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

/*
class Register extends Component {

  state = {
    credentials: {username: '', email: '', password: ''}
  }

  register = event => {
    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    }).then( data => data.json())
      .then(
      data => {
        console.log(data.token);
      }
    ).catch( error => console.error(error))
  }

  inputChanged = event => {
    const cred  = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  render (){
*/

if (isAuthenticated)
  return <Navigate to='/dashboard' />;
else if (accountCreated)
  return <Navigate to='/login' />;

  return (
    <section>
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
                <img src={logo2} bg="dark" variant="dark" expand="lg"/>
                  <h1 className='sas'>Student Admission System</h1>
                <form className="box" onSubmit={e => onSubmit(e)}>
                  <CSRFToken/>
                <p className='has-text-centered'></p>
                  <h4 className='title'>Register</h4>
                    <hr/>
                    <div className="field mt-5">
                        <label className="label">Username</label>
                        <div className="controls">
                            <input
                            name='username'
                            type="text"
                            className="input is-rounded"
                            placeholder="Username" 
                            onChange={e => onChange(e)}
                            value={username}
                            required/>
                        </div>
                    </div>
                  
                    <div className="field mt-5">
                      <label className='label'> Password</label>
                      <p className="control has-icons-left  ">
                      <input
                      name='password'
                      type="password"
                      className="input is-rounded"
                      placeholder="******" 
                      onChange={e => onChange(e)}
                      value={password}
                      required/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field mt-5">
                      <label className='label'>Confirm Password</label>
                      <p className="control has-icons-left  ">
                      <input
                      name='re_password'
                      type="password"
                      className="input is-rounded"
                      placeholder="******" 
                      onChange={e => onChange(e)}
                      value={re_password}
                      required/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field mt-5">
                      <button type='submit' className='glitched'>
                        <h1 className='stl'>Register</h1>
                      </button>
                    </div>
                    <hr/>
                    <div className='turn'>
                      <a href='/login'>
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
//}
//}
};

const mapStateToProps = state=> ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(null, { register })(Register);
