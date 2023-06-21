import React,  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function User () {

    const [formData, setValues] = useState({
        stdName: "",
        averageScore: "",
        achievement: "",
        skillCertificate: "",
        testResult: "",
        schoolName: "",
        schoolAccreditation: ""
      });
      const navigate = useNavigate();
      const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues((prevFormData) => ({
          ...prevFormData,[name]: value, 
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/students/', formData)
          .then((res) => {
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
          });
      };

    // const handleSertifChange = (event) => {
    //     event.preventDefault();
    //     const files = event.target.files;
    //     const fileList = Array.from(files);
    //     const totalFiles = fileList.length;
    //     if (totalFiles > 0) {
    //         setTotalSertif(totalFiles)
    //         setSertif(fileList);
    //     } else {
    //         setSertif([]);
    //     }
    // };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={handleSubmit} className="box">
                                <p className="has-text-centered"></p>
                                {/* <div className="field mt-5">
                                    <label className="label">Nilai Mathematic</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Masukkan Nilai Mathematic"
                                            value={nilaiMathematic}
                                            onChange={(e) => setNilaiMathematic(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai B Indonesia</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nilai B Indonesia"
                                            value={nilaiBIndonesia}
                                            onChange={(e) => setNilaiBIndonesia(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai English</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nilai English"
                                            value={nilaiEnglish}
                                            onChange={(e) => setNilaiEnglish(e.target.value)}
                                        />
                                    </div>
                                </div> */}
                                <div className="field mt-5">
                                    <label className="label">Student Name</label>
                                    <div className="control">
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
                                </div>
                                <div className="field mt-5">
                                <label className="label">Average Score</label>
                                    <div className="control">
                                        <div className="select">
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
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">School Name</label>
                                    <div className="control">
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
                                </div>

                                <div className="field mt-5">
                                    <label className="label">School Accreditation</label>
                                    <div className="control">
                                        <div className="select">
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
                                    </div>
                                </div>
                                <div className="field mt-5">
                               
                                    <label className="label">Skill Certificate</label>
                                    <div className="control">
                                        <div className="select">
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
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    
                                    <label className="label">Achievement</label>
                                    <div className="control">
                                        <div className="select">
                                            <select      
                                            id="achievement"
                                            name='achievement'
                                            value={formData.achievement}
                                            onChange={ handleChange}>
                                            <option value="">select</option>
                                            <option value={5} >International</option>
                                            <option value={4}>National</option>
                                            <option value={3}>Province</option>
                                            <option value={2}>City</option>
                                            <option value={1}>Others</option>

                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="field mt-5">
                                    <label className="label">Upload Certificate</label>
                                    <div className="control">
                                        <input
                                            type="file"
                                            className="input"
                                            placeholder="Sertifikat"
                                            accept=".pdf"
                                            multiple
                                            // onChange={(e) => handleSertifChange(e)}
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Test Result</label>
                                    <div className="control">
                                        <div className="select">
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
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button type="submit" className="btn btn-info">
                                        Add Student
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default User;