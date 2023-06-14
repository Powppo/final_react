import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AddStudentModal from "./AddStudent";
import UpdateStudentModal from "./UpdateStudentModal";
import { getStudents, deleteStudent } from '../services/StudentService';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "../App.css";

const Manage = () => {
    const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
       let mounted = true;
       if(students.length && !isUpdated) {
        return;
        }
       getStudents()
         .then(data => {
           if(mounted) {
             setStudents(data);
           }
         })
       return () => {
          mounted = false;
          setIsUpdated(false);
       }
     }, [isUpdated, students])

    const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditStudent(stu);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setEditModalShow();
        generatePath('/addstudent');
    };

    const handleDelete = (e, studentId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteStudent(studentId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Student");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                  <th >ID</th>
                  <th>Student Name</th>
                  <th>Average Score</th>
                  <th>Achievement</th>
                  <th>Skill Certificate</th>
                  <th>Test Result</th>
                  <th>School Name</th>
                  <th>School Accreditation</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  {students.map((stu, k) => (
                    <tr key={k}>
                      <td>{stu.studentId}</td>
                      <td>{stu.stdName}</td>
                      <td>{stu.averageScore}</td>
                      <td>{stu.achievement}</td>
                      <td>{stu.skillCertificate}</td>
                      <td>{stu.testResult}</td>
                      <td>{stu.schoolName}</td>
                      <td>{stu.schoolAccreditation}</td>
                      <td>
                        <Button
                          className="mr-2"
                          variant="danger"
                          onClick={(event) => handleDelete(event, stu.studentId)}
                        >
                          <RiDeleteBin5Line />
                        </Button>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <Link
                          className="text-decoration-none btn btn-sm btn-success"
                          to={`/updatestudent/${stu.studentId}`}
                        >
                          Update
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>

            </Table>
            <ButtonToolbar>
                <Link className='text-decoration-none btn btn-sm btn-success' to='/addstudent'>
                Add Student
                </Link>
                <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddStudentModal>
            </ButtonToolbar>
        </div>
        </div>
    );
};

export default Manage;