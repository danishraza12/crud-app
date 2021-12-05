import React from 'react';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';
import GetStudents from './components/GetStudents';
import EditStudent from './components/EditStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exactpath="/">
          <Route index element={<GetStudents />} />
          <Route path="add" element={<AddStudent />} />
          <Route path="edit/:id" element={<EditStudent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
