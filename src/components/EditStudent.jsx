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
    const { id } = useParams(); //get id from url

    const getStudentData = async () => {
        const response = await getStudents(id);
        // data is available on data property of response
        setStudent(response.data.student); 
    }

    useEffect(() => {
        getStudentData();
    }, )

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const handleEditButtonClick = async () => {
        navigate('/');
        await editStudent(student, id)
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
            <Button variant="contained" onClick={handleEditButtonClick} color="primary">Save</Button>
        </FormGroup>
    )
}

export default EditStudent;