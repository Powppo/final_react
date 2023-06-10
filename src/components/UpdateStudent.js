import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateStudent() {

    const {studentId} = useParams();
    const [values, setValues] = useState({
        studentId: studentId,
        FirstName: 'FirstName',
        LastName: 'LastName',
        Email: 'Email',
        Password: 'Password',

    });
    useEffect(()=> {
        axios.get('http://192.168.56.1:3000/manage/' + studentId)
        .then(res => {
            setValues({
                ...values,
                FirstName: res.data.FirstName,
                LastName: res.data.LastName,
                RegistrationNo: res.data.RegistrationNo,
                Email: res.data.Email,
                Course: res.data.Course,
            })
        })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://192.168.56.1:3000/manage/'+studentId, values)
        .then(res =>{
            navigate('/manage')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='FirstName'>First Name: </label>
                        <input type='text' name='firstname' className='form-control' placeholder='Enter First Name' 
                        value={values.FirstName} onChange={e => setValues({...values, FirstName: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='LastName'>Last Name: </label>
                        <input type='text' name='lastname' className='form-control' placeholder='Enter Last Name' 
                        value={values.LastName} onChange={e => setValues({...values, LastName: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='RegistrationNo'>Registration No.: </label>
                        <input type='text' name='registrationno' className='form-control' placeholder='Enter Registration No.' 
                        value={values.RegistrationNo} onChange={e => setValues({...values, RegistrationNo: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='Email'>Email: </label>
                        <input type='text' name='email' className='form-control' placeholder='Enter Email' 
                        value={values.Email} onChange={e => setValues({...values, Email: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='Course'>Course: </label>
                        <input type='text' name='course' className='form-control' placeholder='Enter Course' 
                        value={values.Course} onChange={e => setValues({...values, Course: e.target.value})}/>
                    </div><br />
                    <button className='btn btn-info'>Update</button>

                </form>

            </div>

        </div>
        
    );
};


export default UpdateStudent;

