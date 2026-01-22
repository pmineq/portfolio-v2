import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading1, Loading2 } from './components';
import { Intro, Contact } from './pages';

import Hyundai from './pages/project/Hyundai';
import Kplus from './pages/project/Kplus';
import Lsgpis from './pages/project/Lsgpis';
import Portfoliov2 from './pages/project/Portfoliov2';
import Dubuck from './pages/project/Dubuck';
import Editodo from './pages/project/Editodo';
import Admin from './pages/project/Admin';
import Callct from './pages/project/Callct';
import Lms from './pages/project/Lms';
import Lslpl from './pages/project/Lslpl';

import './App.scss';

const Main = lazy(() => import('./pages/Main'));

const Project = lazy(() =>
  Promise.all([
    import('./pages/project'),
    new Promise<void>((resolve) => setTimeout(() => resolve(), 1500)),
  ]).then(([moduleExports]) => moduleExports)
);

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Intro />} />
      <Route path="/contact" element={<Contact />} />

      {/* Project detail pages */}
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

      {/* Main page with loading */}
      <Route
        path="/main"
        element={
          <Suspense fallback={<Loading1 />}>
            <Main />
          </Suspense>
        }
      />

      {/* Project list page with loading */}
      <Route
        path="/project"
        element={
          <Suspense fallback={<Loading2 />}>
            <Project />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
