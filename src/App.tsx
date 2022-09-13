import React from 'react';
import { Login } from './pages/Login/Login';
import { Form } from './pages/Form/Form';
import './App.css';
import { Presence } from './pages/Presence/Presence';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Form' element={<Form/>}/>
          <Route path='/Presence' element={<Presence/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
