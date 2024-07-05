import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Asset1 from '../pages/Asset1';
import Asset2 from '../pages/Asset2';
import Asset3 from '../pages/Asset3';
import Asset4 from '../pages/Asset4';
import NotFound from '../pages/NotFound';
import SearchBar from '../pages/SearchBar';
import Genshin from '../pages/GenshinDamageCalculator'

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* Assets */}
      <Route path="/Asset1" element={<Asset1 />} />
      <Route path="/Asset2" element={<Asset2 />} />
      <Route path="/Asset3" element={<Asset3 />} />
      <Route path="/Asset4" element={<Asset4 />} />
      <Route path="/SearchBar" element={<SearchBar />} />
      <Route path="/Genshin" element={<Genshin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>  
  );
};

export default AppRouter;
