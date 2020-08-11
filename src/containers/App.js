import React from 'react';
import './App.css';
import 'tachyons';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '434a758bd5314913ba65866700a18418'
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      boundingBox: {}
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

    return {
      top: clarifaiFace.top_row * height,
      bottom: (1-clarifaiFace.bottom_row) * height,
      left:  clarifaiFace.left_col * width,
      right: (1-clarifaiFace.right_col) * width
    }
  }

  drawFaceBox = (data) => {
    this.setState({boundingBox: data});
  }

  componentDidMount() {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
    .then(response => {
      const location = this.calculateFaceLocation(response)
      this.drawFaceBox(location)
    })
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = (event) => {
    console.log("Clicked!!!")
  }

  render() {
    return(
      <div> 
        <Particles className="particles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition boundingBox={this.state.boundingBox} />
      </div>
    )
  }
}

export default App;
