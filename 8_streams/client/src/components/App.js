import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
