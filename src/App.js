import React, { useContext } from 'react';

import './App.css';
import PageTemplate from './Components/UI/PageResources/PageTemplate';
import Header from './Components/UI/Header/Header';
import StyleData from './Store/styleContext';
import HeadingText from './Components/UI/PageResources/HeadingText';

import Landing from './Components/Pages/Landing';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';
import Footer from './Components/UI/Footer/Footer';
import AboutMe from './Components/Pages/AboutMe';

function App() {
  const stylectx = useContext(StyleData);

  document.body.style = 'background: ' + stylectx.pageColor + ";";

  const gradientStyle = {
    backgroundImage: `linear-gradient(to bottom,  ${stylectx.mutedColorBackground["backgroundColor"]} 0%,${stylectx.pageColor} 30%)`
  };

  return (
    <React.Fragment>
      <Header />
      <div id="portal-root"></div>
      <div style={gradientStyle}>
      <PageTemplate>
        <div style={{"width" : "100%", "height" : "100px"}} />
        <Landing />
        <HeadingText>My Work</HeadingText>
        <Work />
        <HeadingText>About Me</HeadingText>
        <AboutMe />
        <HeadingText>Contact Me</HeadingText>
        <Contact />
      </PageTemplate>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
