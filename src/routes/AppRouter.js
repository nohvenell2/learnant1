import React from 'react';
//import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';
import Project4 from '../pages/Project4';
import NotFound from '../pages/NotFound';
import {skProject, dkProject} from '../ProjectInfo'

const AppRouter = () => {
  const ProjectKeys = skProject.map(d=>d.key)+dkProject.map(d=>d.key);
  console.log(ProjectKeys);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* Assets */}
      <Route path="/*" element={<NotFound />} />
    </Routes>  
  );
};

export default AppRouter;
