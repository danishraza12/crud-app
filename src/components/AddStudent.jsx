import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, makeStyles, Button, Typography } from '@material-ui/core'
import { addStudent } from '../API/API';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: '20px'
        }
    }
})

const AddStudent = () => {
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

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const handleButtonClick = async () => {
        navigate('/');
        await addStudent(student);
    }

    return (
        <FormGroup className={cssClasses.container}>
            <Typography variant="h4">Add Student</Typography>
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
            <Button variant="contained" onClick={handleButtonClick} color="primary">Add Student</Button>
        </FormGroup>
    )
}

export default AddStudent;