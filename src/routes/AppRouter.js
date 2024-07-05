import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
//import About from '../pages/About';
import SkAsset1 from '../pages/SK/Asset1';
import SkAsset2 from '../pages/SK/Asset2';
import DkAsset1 from '../pages/DK/Asset1';
import DkAsset2 from '../pages/DK/Asset2';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*About
          <Route path="/about" component={About} />
        */}
        {/* Assets */}
        <Route path="/SK/Asset1" element={<SkAsset1 />} />
        <Route path="/SK/Asset2" element={<SkAsset2 />} />
        <Route path="/DK/Asset1" element={<DkAsset1 />} />
        <Route path="/DK/Asset2" element={<DkAsset2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
