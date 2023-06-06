import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "../App.css";
import axios from 'axios';

class StudentList extends React.Component{
    state={ details:[],}

    componentDidMount(){

        let data;
        axios.get('http://127.0.0.1:8000/students/')
        .then(res=>{
            data=res.data;
            this.setState({
                details:data
            });
        })
        .catch(err=>{ })
    }
    render(){
        return(
            <div>
                           
            <header>Student List</header>
            <hr></hr>
            {this.state.details.map((output, id) =>(
                <div key={id}>
                    <h2>{output.studentId}</h2>
                    <h2>{output.FirstName}</h2>
                    <h2>{output.LastName}</h2>
                    <h2>{output.RegistrationNo}</h2>
                    <h2>{output.Email}</h2>
                    <h2>{output.Course}</h2>

                </div>

                ))}
            </div>
                


        //     <div className="container-fluid side-container">
        //     <div className="row side-row" >
        //      <p id="before-table"></p>
        //          <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        //          <thead>
        //              <tr>
        //              <th>ID</th>
        //              <th>First Name</th>
        //              <th>Last Name</th>
        //              <th>Registration No</th>
        //              <th>Email</th>
        //              <th>Course</th>
        //              </tr>
        //          </thead>
        //          <tbody>
        //              {this.state.details.map((stu) =>
        //              <tr key={stu.id}>
        //                  <td>{stu.studentId}</td>
        //                  <td>{stu.FirstName}</td>
        //                  <td>{stu.LastName}</td>
        //                  <td>{stu.RegistrationNo}</td>
        //                  <td>{stu.Email}</td>
        //                  <td>{stu.Course}</td>
        //              </tr>)}
        //          </tbody>
        //      </Table>
        //      </div>
        //    </div>
        )
    }




};
export default StudentList;
