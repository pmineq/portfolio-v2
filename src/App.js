import React, { Component, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { Loading1, Loading2 } from './components/Loading';

import Intro from './pages/Intro';

import Hyundai from './pages/project/hyundai';
import Kplus from './pages/project/kplus';
import Lsgpis from './pages/project/lsgpis';
import Portfoliov2 from './pages/project/portfoliov2';
import Dubuck from './pages/project/dubuck';
import Editodo from './pages/project/editodo';
import Admin from './pages/project/admin';
import Callct from './pages/project/callct';
import Lms from './pages/project/lms';
import Lslpl from './pages/project/lslpl';

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
        <Route path="/project/lsgpis" element={<Lsgpis />} />
        <Route path="/project/portfoliov2" element={<Portfoliov2 />} />
        <Route path="/project/dubuck" element={<Dubuck />} />
        <Route path="/project/editodo" element={<Editodo />} />
        <Route path="/project/admin" element={<Admin />} />
        <Route path="/project/callct" element={<Callct />} />
        <Route path="/project/lms" element={<Lms />} />
        <Route path="/project/lslpl" element={<Lslpl />} />

        {/* 메인 기본 로딩 */}
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
