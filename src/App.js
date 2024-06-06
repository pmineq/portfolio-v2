import React, { Component, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { Loading1, Loading2 } from './components/Loading';

import Intro from './pages/Intro';

import Hyundai from './pages/project/hyundai';
import Kplus from './pages/project/kplus';

import Contact from './pages/Contact';



const Main = lazy(() => import('./pages/Main'));
const Project = lazy(() => {
  return Promise.all([
    import('./pages/Project'),
    new Promise(resolve => setTimeout(resolve, 1500))
  ])
  .then(([moduleExports]) => moduleExports);
});

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" index element={<Intro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/hyundai" element={<Hyundai />} />
        <Route path="/project/kplus" element={<Kplus />} />

        {/* 기본 로딩 */}
        <Route
          path="/main"
          element={
            <Suspense fallback={<Loading1 />}>
              <Main />
            </Suspense>
          }
        />

        {/* 프로젝트 로딩 : 우주선 */}
        <Route
          path="/project"
          element={
            <Suspense fallback={<Loading2 />}>
              <Project />
            </Suspense>
          }
        />

        {/* <Route path="*" element={<NotFound/>}></Route> */}
      </Routes>
    );
  }
}


export default App;
