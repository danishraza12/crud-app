import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getStudents, deleteStudent } from '../API/API';

const useStyle = makeStyles({
    grid: {
        width: '90%',
        margin: '35px 0 0 55px' //up right bottom left
    },
    thead: {
        '& > *': {
            background: '#191970',
            color: '#FFFFFF',
            fontSize: '20px'
        } //'& > *' means to apply the CSS to all child components as well
    },
    trow: {
        '& > *': {
            fontSize: '20px'
        }
    },
    heading: {
        marginLeft: 450, 
        marginTop: 10,
        fontWeight: "bold"
    }
})


const GetStudents = () => {
    const cssClasses = useStyle();
    const studentInfo = [
            {
                "id": 1,
                "name": "Danish Raza",
                "rollNumber": "17B-122-SE",
                "cgpa": "3.67",
                "batch": "2017",
                "degreeStatus": "Complete"
            },
            {
                "id": 2,
                "name": "ABCD",
                "rollNumber": "20211200",
                "cgpa": "3.00",
                "batch": "2017",
                "degreeStatus": "Complete"
            }
        ]

    const [ students, setStudents ] = useState([])

    useEffect(() => {
        getStudentData();
    }, [])

    const getStudentData = async () => {
        // const response = await getStudents();
        // setStudents(response.data);
    }

    const deleteStudentData = async (id) => {
        // return await deleteStudent(id);
    }

    return (
        <>
            <Typography variant="h4" className={cssClasses.heading}>Student Information</Typography>
            <Table className={cssClasses.grid}>
                <TableHead>
                    <TableRow className={cssClasses.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Roll Number</TableCell>
                        <TableCell>CGPA</TableCell>
                        <TableCell>Batch</TableCell>
                        <TableCell>Degree Status</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        studentInfo.map((std, index) => (
                            <TableRow className={cssClasses.trow} key={index}>
                                <TableCell>{std.id}</TableCell>
                                <TableCell>{std.name}</TableCell>
                                <TableCell>{std.rollNumber}</TableCell>
                                <TableCell>{std.gpa}</TableCell>
                                <TableCell>{std.batch}</TableCell>
                                <TableCell>{std.degreeStatus}</TableCell>
                                <TableCell>
                                    <Link to={`/edit/${std.id}`}>
                                        <Button variant="contained" color="primary" style={{marginRight: 10}}>Edit</Button>
                                    </Link>
                                    <Button variant="contained" color="secondary" onClick={() => deleteStudentData(std.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default GetStudents;