import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getStudents, deleteStudent } from '../API/API';

const useStyle = makeStyles({
    grid: {
        width: '90%',
        margin: '30px 0 0 55px' //up right bottom left
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
        marginLeft: 475, 
        marginTop: 20,
        fontWeight: "bold"
    }
})


const GetStudents = () => {
    const cssClasses = useStyle();
    const [ students, setStudents ] = useState([])

    useEffect(() => {
        getStudentData();
    }, [students])

    const getStudentData = async () => {
        const response = await getStudents();
        setStudents(response.data.students);
    }

    const deleteStudentData = async (id) => {
        await deleteStudent(id);
        getStudentData();
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
                        students.map((std, index) => (
                            <TableRow className={cssClasses.trow} key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{std.name}</TableCell>
                                <TableCell>{std.rollNumber}</TableCell>
                                <TableCell>{std.cgpa}</TableCell>
                                <TableCell>{std.batch}</TableCell>
                                <TableCell>{std.degreeStatus}</TableCell>
                                <TableCell>
                                    <Link to={`/edit/${std._id}`}>
                                        <Button variant="contained" color="primary" style={{marginRight: 10}}>Edit</Button>
                                    </Link>
                                    <Button variant="contained" color="secondary" onClick={() => deleteStudentData(std._id)}>Delete</Button>
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