import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
import Portfolios from './components/pages/portfolios/Portfolios';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/educations" element={<Educations/>} />
          <Route path="/portfolios" element={<Portfolios/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;