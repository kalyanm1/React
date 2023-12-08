import React from 'react';
import './App.css';
import SignIn from './Signin';
import SignUp from './Signup';
import ForgotPassword from './forgotpassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="form-container">
        <Router>
          <Routes>
             <Route path="/" element={<SignIn />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
          </Router>
          
          {/* <hr />
            <SignIn/> */}
          {/* <hr />
            <SignUp/> */}
      </div>
    </div>
  );
};

export default App;


