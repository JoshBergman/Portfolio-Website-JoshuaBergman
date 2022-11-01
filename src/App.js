import React, { useContext } from 'react';

import './App.css';
import PageTemplate from './Components/UI/PageResources/PageTemplate';
import Header from './Components/UI/Header/Header';
import StyleData from './Store/styleContext';

function App() {
  const stylectx = useContext(StyleData);

  document.body.style = 'background: ' + stylectx.pageColor + ";";

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
