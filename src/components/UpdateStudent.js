import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setValues((prevFormData) => ({
      ...prevFormData,[name]: value, 
    }));
  };
  const [formData, setValues] = useState({
    stdName: "",
    averageScore: "",
    achievement: "",
    skillCertificate: "",
    testResult: "",
    schoolName: "",
    schoolAccreditation: ""
  });


  useEffect(() => {
    axios.get(`http://localhost:8000/api/students/${studentId}`)
      .then((response) => {
        const studentData = response.data;
        setValues({
          stdName: studentData.stdName,
          averageScore: studentData.averageScore,
          achievement: studentData.achievement,
          skillCertificate: studentData.skillCertificate,
          testResult: studentData.testResult,
          schoolName: studentData.schoolName,
          schoolAccreditation: studentData.schoolAccreditation
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [studentId]);


    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/students/', formData)
      .then((res) => {
        navigate('/manage');
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="stdName">Student Name:</label>
            <input
              type="text"
              id="stdName"
              name="stdName"
              className="form-control"
              placeholder="Student Name"
              value={formData.stdName}
              onChange={(e) =>
                setValues({ ...formData, stdName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="averageScore">Average Score:</label>
            <select      
              id="averageScore"
              name='averageScore'
              value={formData.averageScore}
              onChange={ handleChange}>
              <option value="">select</option>
              <option value={5}>85-100 </option>
              <option value={4}>70-84 </option>
              <option value={3}>55-69 </option>
              <option value={2}>45-54 </option>
              <option value={1}>≤ 44 </option>

            </select>
            
          </div>
          <div>
            <label htmlFor="achievement">Achievement:</label>
            <input
              type="text"
              id="achievement"
              name="achievement"
              className="form-control"
              placeholder="Achievement"
              value={formData.achievement}
              onChange={(e) =>
                setValues({ ...formData, achievement: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="skillCertificate">Skill Certificate:</label>
            <select      
              id="skillCertificate"
              name='skillCertificate'
              value={formData.skillCertificate}
              onChange={ handleChange}>
              <option value="">select</option>
              <option value={5}>More than four</option>
              <option value={4}>Three</option>
              <option value={3}>Two</option>
              <option value={2}>One</option>
              <option value={1}>No</option>
            </select>
          </div>
          <div>
            <label htmlFor="testResult">Test Result:</label>
            <select      
              id="testResult"
              name='testResult'
              value={formData.testResult}
              onChange={ handleChange}>
              <option value="">select</option>
              <option value={5}>85-100 </option>
              <option value={4}>70-84 </option>
              <option value={3}>55-69 </option>
              <option value={2}>45-54 </option>
              <option value={1}>≤ 44 </option>

            </select>
          </div>
          <div>
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              className="form-control"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={(e) =>
                setValues({ ...formData, schoolName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="schoolAccreditation">School Accreditation:</label>
            <select      
              id="schoolAccreditation"
              name='schoolAccreditation'
              value={formData.schoolAccreditation}
              onChange={ handleChange}>
              <option value="">select</option>
              <option value={3}>A - High Level</option>
              <option value={2}>B - Good Level</option>
              <option value={1}>C - Low Level</option>

            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
