import React, {Suspense} from 'react';
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Pages = ['TempCarousel','Asset2','Asset3','Asset4','SearchBar','Genshin','Home','About','TempForm1'];
const pageComponent = (name) => React.lazy(()=>import(`../pages/${name}`));
  const MyRoutes = Pages.map((page,i)=>{
    const path = '/'+page;
    const MyComponent = pageComponent(page);
    return <Route key={i} path={path} element={<MyComponent />} />;
    }
);
const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>} >
      <Routes>
        <Route exact path="/" element={<Home />} />
        {MyRoutes}
      </Routes>  
    </Suspense>
  );
};

export default AppRouter;
