import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, ButtonToolbar } from 'react-bootstrap';
import "../App.css";

const AdmissionResult = () => {
  const [data, setData] = useState([]);
  const [calculationResult, setCalculationResult] = useState([]);

  useEffect(() => {
    
  }, []);

  const runCalculation = async () => {
    try { 
      // Trigger the calculation
      const calculate = await axios.get("http://127.0.0.1:8000/api/save/");
      console.log(calculate)
      // Get the data
      const response = await axios.get("http://127.0.0.1:8000/api/mabac/");
      const mabac_result = response.data;
      setCalculationResult(mabac_result);
      
    } catch (error) {
      console.log("Error fetching mabac results:", error);
    }
  };


  return (
    <div className="App">
      <h1>MABAC Calculation</h1>
      <ButtonToolbar>
        <button onClick={runCalculation}>Run Calculation</button>
      </ButtonToolbar>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Result</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {calculationResult.map((item, index) => (
            <tr key={index}>
              <td>{item.student_name}</td>
              <td>{item.results}</td>
              <td>{item.ranking}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {calculationResult.length > 0 && (
        <div>
          <h2>Calculation Result</h2>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Separation Measure</th>
                <th>Decision</th>
              </tr>
            </thead>
            <tbody>
              {calculationResult.map((item, index) => (
                <tr key={index}>
                   <td>{item.student_name}</td>
                  <td>{item.results}</td>
                  <td>{item.ranking <= 5 ? 'Accepted' : 'Not'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AdmissionResult;