import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';



const UpdateStudentModal = (props) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     updateStudent(props.student.studentId, e.target)
    //     .then((result)=>{
    //         alert(result);
    //         props.setUpdated(true);
    //     },
    //     (error)=>{
    //         alert("Failed to Update Student");
    //     })
    // };

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form>
                    <div>
                        <label htmlFor='FirstName'>First Name: </label>
                        <input type='text' name='firstname' className='form-control' placeholder='Enter First Name'/>
                    </div>
                    <div>
                        <label htmlFor='LastName'>Last Name: </label>
                        <input type='text' name='lastname' className='form-control' placeholder='Enter Last Name'/>
                    </div>
                    <div>
                        <label htmlFor='RegistrationNo'>Registration No.: </label>
                        <input type='text' name='registrationno' className='form-control' placeholder='Enter Registration No.'/>
                    </div>
                    <div>
                        <label htmlFor='Email'>Email: </label>
                        <input type='text' name='email' className='form-control' placeholder='Enter Email'/>
                    </div>
                    <div>
                        <label htmlFor='Course'>Course: </label>
                        <input type='text' name='course' className='form-control' placeholder='Enter Course'/>
                    </div><br />
                    <button className='btn btn-info'>Update</button>

                </form>

            </div>

        </div>
        // <div className="container">

        //     {/* <Modal
        //         {...props}
        //         size="lg"
        //         aria-labelledby="contained-modal-title-vcenter"
        //         centered >

        //         <Modal.Header closeButton>
        //             <Modal.Title id="contained-modal-title-vcenter">
        //                 Update Student Information
        //             </Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //             <Row>
        //                 <Col sm={6}>
        //                     <Form onSubmit={handleSubmit}>
        //                         <Form.Group controlId="FirstName">
        //                             <Form.Label>First Name</Form.Label>
        //                             <Form.Control type="text" name="FirstName" required defaultValue={props.student.FirstName} placeholder="" />
        //                     </Form.Group>

        //                     <Form.Group controlId="LastName">
        //                             <Form.Label>Last Name</Form.Label>
        //                             <Form.Control type="text" name="LastName" required defaultValue={props.student.LastName} placeholder="" />
        //                     </Form.Group>
        //                     <Form.Group controlId="RegistrationNo">
        //                             <Form.Label>Registration No.</Form.Label>
        //                             <Form.Control type="text" name="RegistrationNo" required defaultValue={props.student.RegistrationNo} placeholder="" />
        //                     </Form.Group>
        //                     <Form.Group controlId="Email">
        //                             <Form.Label>Email</Form.Label>
        //                             <Form.Control type="text" name="Email" required defaultValue={props.student.Email} placeholder="" />
        //                     </Form.Group>
        //                     <Form.Group controlId="Course">
        //                             <Form.Label>Course</Form.Label>
        //                             <Form.Control type="text" name="Course" required defaultValue={props.student.Course} placeholder="" />
        //                     </Form.Group>
        //                     <Form.Group>
        //                         <p></p>
        //                         <Button variant="primary" type="submit">
        //                             Submit
        //                         </Button>
        //                     </Form.Group>
        //                     </Form>
        //                 </Col>
        //             </Row>
        //         </Modal.Body>
        //         <Modal.Footer>
        //         <Button variant="danger" type="submit" onClick={props.onHide}>
        //                 Close
        //         </Button>

        //         </Modal.Footer>
        //     </Modal> */}
        // </div>
    );
};


export default UpdateStudentModal;

