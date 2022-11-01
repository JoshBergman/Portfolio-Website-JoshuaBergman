import React from 'react';
import './App.css';
import PageTemplate from './Components/UI/PageResources/PageTemplate';
import Header from './Components/UI/Header/Header';

function App() {

  return (
    <React.Fragment>
      <Header />
      <div id="portal-root"></div>
      <PageTemplate>
        This is words
      </PageTemplate>
    </React.Fragment>
  );
}

export default App;
