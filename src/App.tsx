import React from 'react';
import { Login } from './pages/Login/Login';
import { Form } from './pages/Form/Form';
import './App.css';
import { Presence } from './pages/Presence/Presence';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/presence" element={<Presence/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
