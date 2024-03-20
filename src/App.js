import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';
import './assets/scss/common.scss';

import Intro from './pages/Intro';
import Project from './pages/Project';



class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" index element={<Intro/>}></Route>
        <Route path="/project" element={<Project/>}></Route>

        {/* <Route path="*" element={<NotFound/>}></Route> */}
      </Routes>
    );
  }
}


export default App;
