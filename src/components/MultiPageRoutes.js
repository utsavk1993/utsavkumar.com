import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Recommendations from './recommendations/Recommendations';

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Home />} />
      <Route exact path={'/about'} element={<About />} />
      <Route exact path={'/projects'} element={<Portfolio />} />
      <Route exact path={'/recommendations'} element={<Recommendations />} />
    </Routes>
  );
}
