import React, { useContext } from 'react';

import './App.css';
import PageTemplate from './Components/UI/PageResources/PageTemplate';
import Header from './Components/UI/Header/Header';
import StyleData from './Store/styleContext';

import Landing from './Components/Pages/Landing';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';

function App() {
  const stylectx = useContext(StyleData);

  document.body.style = 'background: ' + stylectx.pageColor + ";";

  return (
    <React.Fragment>
      <Header />
      <div id="portal-root"></div>
      <PageTemplate>
        <div style={{"width" : "100%", "height" : "100px"}} />
        <Landing />
        <Work />
        <Contact />
      </PageTemplate>
    </React.Fragment>
  );
}

export default App;
