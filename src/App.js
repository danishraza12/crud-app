import React from 'react';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';
import GetStudents from './components/GetStudents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={GetStudents} />
        </Routes>
        <Routes>
          <Route exact path="/add-student" component={AddStudent} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
