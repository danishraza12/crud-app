import axios from 'axios';

// const url = 'http://localhost:8000/student';
const url = 'https://crud-app-apis.herokuapp.com/student';

export const getStudents = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};

export const addStudent = async (student) => {
  return await axios.post(`${url}/add`, student);
};

export const editStudent = async (student, id) => {
  return await axios.put(`${url}/${id}`, student);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
