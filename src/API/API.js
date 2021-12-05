import axios from 'axios';

const url = 'http://localhost:3000/users';

export const getStudents = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};

export const addStudent = async (student) => {
  return await axios.post(url, student);
};

export const editStudent = async (student, id) => {
  return await axios.put(`${url}/${id}`, student);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
