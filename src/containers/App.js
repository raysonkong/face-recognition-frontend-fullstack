import React from 'react';
import './App.css';
import 'tachyons';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';

class App extends React.Component {
  render() {
    return(
      <div> 
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App;
