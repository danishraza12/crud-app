import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, makeStyles, Button, Typography } from '@material-ui/core'
import { getStudents, editStudent } from '../API/API';
import { useNavigate, useParams } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: '20px'
        }
    }
})

const EditStudent = () => {
    const cssClasses = useStyles();
    const enteredValues = {
        name: '',
        rollNumber: '',
        cgpa: '',
        batch: '',
        degreeStatus: ''
    }
    const [ student, setStudent ] = useState(enteredValues);
    const { name, rollNumber, cgpa, batch, degreeStatus } = student;
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getStudentData();
    }, [])

    const getStudentData = async () => {
        // const reponse = await getStudentData(id);
        const students = [
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
        setStudent(students[0]);
    }

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const handleButtonClick = () => {
        navigate('/');
    }

    return (
        <FormGroup className={cssClasses.container}>
            <Typography variant="h4">Edit Student</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={e => handleChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Roll Number</InputLabel>
                <Input onChange={e => handleChange(e)} name="rollNumber" value={rollNumber}/>
            </FormControl>
            <FormControl>
                <InputLabel>CGPA</InputLabel>
                <Input onChange={e => handleChange(e)} name="cgpa" value={cgpa}/>
            </FormControl>
            <FormControl>
                <InputLabel>Batch</InputLabel>
                <Input onChange={e => handleChange(e)} name="batch" value={batch}/>
            </FormControl>
            <FormControl>
                <InputLabel>Degree Status</InputLabel>
                <Input onChange={e => handleChange(e)} name="degreeStatus" value={degreeStatus}/>
            </FormControl>
            <Button variant="contained" onClick={handleButtonClick} color="primary">Save</Button>
        </FormGroup>
    )
}

export default EditStudent;