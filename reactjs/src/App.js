import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ExamTest from '././component/exam/ExamTest';
import Header from '././component/layout/Header';
import Result from '././component/exam/Result';
import SchoolSubject from '././component/layout/SchoolSubject';
import CreateQuestion from '././component/Admin/CreateQuestion';
import Home from '././component/layout/Home';
import Login from './component/Login/Login';
import { useSelector } from 'react-redux';
import { Component } from 'react';
import RegisterForm from './component/Login/RegisterForm';
import FastRegister from './component/Login/FastRegister';
import Footer from './component/layout/Footer';

function App() {
  const JWT = useSelector(state => state);
  function hasJWT() {
    return JWT.loginReducer.token != undefined;
  }

  function checkRole() {
    console.log(JWT.loginReducer);
    console.log(JWT.loginReducer.roles);
    return JWT.loginReducer;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class/:classes" element={hasJWT() ? <SchoolSubject /> : <Navigate to={{ pathname: '/login' }} replace />} />
          <Route path="/class/:classes/subject/:subject" element={hasJWT() ? <ExamTest /> : <Navigate to={{ pathname: '/login' }} replace />} />
          <Route path="/result" element={hasJWT() ? <Result /> : <Navigate to={{ pathname: '/login' }} replace />} />
          <Route path="/createQuestion" element={hasJWT() ? <CreateQuestion /> : <Navigate to={{ pathname: '/login' }} replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<FastRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
