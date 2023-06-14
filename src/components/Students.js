import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudents } from '../services/StudentService';
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Average Score</th>
            <th>Achievement</th>
            <th>Skill Certificate</th>
            <th>Test Result</th>
            <th>School Name</th>
            <th>School Accreditation</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.stdName}</td>
                <td>{stu.averageScore}</td>
                <td>{stu.achievement}</td>
                <td>{stu.skillCertificate}</td>
                <td>{stu.testResult}</td>
                <td>{stu.schoolName}</td>
                <td>{stu.schoolAccreditation}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Students;