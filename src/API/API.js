import axios from 'axios';

const url = 'http://localhost:3000/users';
const getStudents = async () => {
  return await axios.get(url);
};

export default getStudents;
