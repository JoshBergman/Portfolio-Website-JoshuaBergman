import React from 'react';
import './App.css';
import PageTemplate from './Components/UI/PageResources/PageTemplate';
import Header from './Components/UI/Header/Header';

function App() {

  return (
    <React.Fragment>
      <Header />
      <PageTemplate>
        This is words
      </PageTemplate>
    </React.Fragment>
  );
}

export default App;
