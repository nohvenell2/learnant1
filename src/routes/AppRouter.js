import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import skAsset1 from '../pages/SK/Asset1';
import skAsset2 from '../pages/SK/Asset2';
import dkAsset1 from '../pages/DS/Asset1';
import dkAsset2 from '../pages/DK/Asset2';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/*About
          <Route path="/about" component={About} />
        */}
        {/* Assets */}
        <Route path="/SK/Asset1" component={skAsset1} />
        <Route path="/SK/Asset2" component={skAsset2} />
        <Route path="/DK/Asset1" component={dkAsset1} />
        <Route path="/DK/Asset2" component={dkAsset2} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
