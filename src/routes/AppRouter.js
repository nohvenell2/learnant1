import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Asset1 from '../pages/Asset1';
import Asset2 from '../pages/Asset2';
import Asset3 from '../pages/Asset3';
import Asset4 from '../pages/Asset4';
import NotFound from '../pages/NotFound';
import SearchBar from '../pages/SearchBar';
import Genshin from '../pages/Genshin';
import About from '../pages/About';
import Temp from '../pages/Temp';
//const Pages = ['Asset1','Asset2','Asset3','Asset4','SearchBar','Genshin','Home','About'];
//const importComponent = (name) => React.lazy(()=>import(`/pages/${name}`));
const AppRouter = () => {
  console.log('i am loaded');
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
      <Route path="/About" element={<About />} />
      <Route path="/Temp" element={<Temp />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>  
  );
};

export default AppRouter;
