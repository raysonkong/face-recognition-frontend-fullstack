import React from 'react';
import './App.css';
import 'tachyons';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';


class App extends React.Component {
  render() {
    return(
      <div> 
        <Particles className="particles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App;
