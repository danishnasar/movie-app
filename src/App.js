import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import Movie from './components/movie';
import NoData from './components/noData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path = '/' element={<Search />}></Route>
      <Route path='/moviedata' element={<Movie />}></Route>
      <Route path='/notfound' element={<NoData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
