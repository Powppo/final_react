import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import { getStudents } from '../services/StudentService';
import "../App.css";

const DATA = [
    {
        id: 1,
        name: 'A',
        c1: '95.3',
        c2: '2',
        c3: '5',
        c4: '44.2',
        c5: '1'
    },
    {
        id: 2,
        name: 'B',
        c1: '82.6',
        c2: '1',
        c3: '4',
        c4: '75.3',
        c5: '2'
    },
    {
        id: 3,
        name: 'C',
        c1: '58.6',
        c2: '3',
        c3: '4',
        c4: '52.4',
        c5: '2'
    },
    {
        id: 4,
        name: 'D',
        c1: '46.9',
        c2: '1',
        c3: '5',
        c4: '92.0',
        c5: '2'
    },
    {
        id: 5,
        name: 'E',
        c1: '84.6',
        c2: '3',
        c3: '1',
        c4: '89.8',
        c5: '2'
    },
    {
        id: 6,
        name: 'F',
        c1: '85.5',
        c2: '5',
        c3: '0',
        c4: '89.8',
        c5: '3'
    },
    {
        id: 7,
        name: 'G',
        c1: '54.0',
        c2: '4',
        c3: '0',
        c4: '50.3',
        c5: '3'
    },
    {
        id: 8,
        name: 'H',
        c1: '49.0',
        c2: '4',
        c3: '4',
        c4: '89.8',
        c5: '2'
    },

]
const AdmissionResult = () => {
    const [data, setData] = useState(DATA)

    // Stage 1: Formation of the decision matrix (X)
    const decisionMatrix = data.map((item) => ({
        id: item.id,
        name: item.name,
        c1: parseFloat(item.c1) >= 85 ? 5 : parseFloat(item.c1) >= 70 ? 4 : parseFloat(item.c1) >= 55 ? 3 : parseFloat(item.c1) >= 45 ? 2 : 1,
        c2: parseFloat(item.c2),
        c3: parseFloat(item.c3) >= 4 ? 5 : parseFloat(item.c3) === 3 ? 4 : parseFloat(item.c3) === 2 ? 3 : parseFloat(item.c3) === 1 ? 2 : 1,
        c4: parseFloat(item.c4) >= 85 ? 5 : parseFloat(item.c4) >= 70 ? 4 : parseFloat(item.c4) >= 55 ? 3 : parseFloat(item.c4) >= 45 ? 2 : 1,
        c5: parseFloat(item.c5),
    }));


    // Step 2: Normalization of the decision matrix (X)

    function getMinValues(column) {
        const values = decisionMatrix.map(item => item[column]);
        const minValue = Math.min(...values);

        return minValue
    }

    function getMaxValues(column) {
        const values = decisionMatrix.map(item => item[column]);
        const maxValue = Math.max(...values);

        return maxValue
    }

    const normalizedMatrix = decisionMatrix.map((item) => ({
        id: item.id,
        name: item.name,
        c1: (item.c1 - getMinValues('c1')) / (getMaxValues('c1') - getMinValues('c1')),
        c2: (item.c2 - getMinValues('c2')) / (getMaxValues('c2') - getMinValues('c2')),
        c3: (item.c3 - getMinValues('c3')) / (getMaxValues('c3') - getMinValues('c3')),
        c4: (item.c4 - getMinValues('c4')) / (getMaxValues('c4') - getMinValues('c4')),
        c5: (item.c5 - getMinValues('c5')) / (getMaxValues('c5') - getMinValues('c5')),
    }));

    console.log(normalizedMatrix)

    // Step 3: Calculation of weighted matrix elements (V)
    const weights = [30, 20, 20, 15, 15];
    const weightedMatrix = normalizedMatrix.map((item) => ({
        id: item.id,
        name: item.name,
        c1: (item.c1 * weights[0]) + weights[0],
        c2: (item.c2 * weights[1]) + weights[1],
        c3: (item.c3 * weights[2]) + weights[2],
        c4: (item.c4 * weights[3]) + weights[3],
        c5: (item.c5 * weights[4]) + weights[4],
    }));

    // console.log(weightedMatrix)

    function calculateWeigtedMatrix(prop) {
        return weightedMatrix.reduce((item, obj) => item * obj[prop], 1);
    }

    // Step 4: Boundary approximate area matrix (G)
    const boundaryMatrix = {
        c1: calculateWeigtedMatrix('c1') / weightedMatrix.length,
        c2: calculateWeigtedMatrix('c2') / weightedMatrix.length,
        c3: calculateWeigtedMatrix('c3') / weightedMatrix.length,
        c4: calculateWeigtedMatrix('c4') / weightedMatrix.length,
        c5: calculateWeigtedMatrix('c5') / weightedMatrix.length,
    }

    // Step 5: Calculation of the alternative element distance matrix from the estimated boundary area (Q)
    const alternativeDistanceMatrix = weightedMatrix.map((item) => ({
        id: item.id,
        name: item.name,
        c1: item.c1 - boundaryMatrix.c1,
        c2: item.c2 - boundaryMatrix.c2,
        c3: item.c3 - boundaryMatrix.c3,
        c4: item.c4 - boundaryMatrix.c4,
        c5: item.c5 - boundaryMatrix.c5,
    }));

    // Stage 6: Ranking of alternatives
    const calculateSumById = () => {
        const result = {};
        alternativeDistanceMatrix.forEach((el) => {
            const { id, name, c1, c2, c3, c4, c5 } = el;
            const sum = c1 + c2 + c3 + c4 + c5;
            result[name + id] = sum;
        });
        return result;
    };

    const sumById = calculateSumById();
    console.log(sumById);


    //   const [students, setStudents] = useState([]);

    //   useEffect(() => {
    //    let mounted = true;
    //    getStudents()
    //      .then(data => {
    //        if(mounted) {
    //          setStudents(data)
    //        }
    //      })
    //    return () => mounted = false;
    //  }, [])

    return (
        <div className="container-fluid side-container">
            <div className="row side-row" >
                <p id="before-table"></p>
                <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student's Name</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    {/* <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.RegistrationNo}</td>
                <td>{stu.Email}</td>
                <td>{stu.Course}</td>
            </tr>)}
        </tbody> */}
                </Table>
            </div>
        </div>
    );
};

export default AdmissionResult;