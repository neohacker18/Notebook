import React, { useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About'
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="about" element={<About />} />
            <Route exact path="login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
