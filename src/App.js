import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';
import './assets/scss/common.scss';

import Intro from './pages/Intro';

// import About from './pages/About';

import Project from './pages/Project';
import Hyundai from './pages/project/hyundai';

import Contact from './pages/Contact';



class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" index element={<Intro/>}></Route>

        {/* <Route path="/about" index element={<About/>}></Route> */}

        <Route path="/project" element={<Project/>}></Route>
        <Route path="/project/HyundaiShop" element={<Hyundai/>}></Route>

        <Route path="/contact" element={<Contact/>}></Route>

        {/* <Route path="*" element={<NotFound/>}></Route> */}
      </Routes>
    );
  }
}


export default App;
