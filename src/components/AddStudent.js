import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [values, setValues] = useState({
    stdName: '',
    averageScore: '',
    achievement: '',
    skillCertificate: '',
    testResult: '',
    schoolName: '',
    schoolAccreditation: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/students/', values)
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
              value={values.stdName}
              onChange={(e) =>
                setValues({ ...values, stdName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="averageScore">Average Score:</label>
            <input
              type="text"
              id="averageScore"
              name="averageScore"
              className="form-control"
              placeholder="Average Score"
              value={values.averageScore}
              onChange={(e) =>
                setValues({ ...values, averageScore: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="achievement">Achievement:</label>
            <input
              type="text"
              id="achievement"
              name="achievement"
              className="form-control"
              placeholder="Achievement"
              value={values.achievement}
              onChange={(e) =>
                setValues({ ...values, achievement: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="skillCertificate">Skill Certificate:</label>
            <input
              type="text"
              id="skillCertificate"
              name="skillCertificate"
              className="form-control"
              placeholder="Skill Certificate"
              value={values.skillCertificate}
              onChange={(e) =>
                setValues({ ...values, skillCertificate: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="testResult">Test Result:</label>
            <input
              type="text"
              id="testResult"
              name="testResult"
              className="form-control"
              placeholder="Test Result"
              value={values.testResult}
              onChange={(e) =>
                setValues({ ...values, testResult: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              className="form-control"
              placeholder="School Name"
              value={values.schoolName}
              onChange={(e) =>
                setValues({ ...values, schoolName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="schoolAccreditation">School Accreditation:</label>
            <input
              type="text"
              id="schoolAccreditation"
              name="schoolAccreditation"
              className="form-control"
              placeholder="School Accreditation"
              value={values.schoolAccreditation}
              onChange={(e) =>
                setValues({ ...values, schoolAccreditation: e.target.value })
              }
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
