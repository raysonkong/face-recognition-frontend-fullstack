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
      htmlBoundingBoxes: []
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);



    const clarifaiRegions = data.outputs[0].data.regions;
    let percentageFaceLocations = clarifaiRegions.map(region => {
      return region.region_info.bounding_box
    })

    let htmlFaceLocations = percentageFaceLocations.map(percentage => {
      return {
        top: percentage.top_row * height + 'px',
        bottom: (1-percentage.bottom_row) * height + 'px',
        left:  percentage.left_col * width + 'px',
        right: (1-percentage.right_col) * width + 'px'        
      }
    })

    return htmlFaceLocations;
  }

  drawFaceBox = (data) => {
    this.setState({htmlBoundingBoxes: data})
  }

  componentDidMount() {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
    .then(response => {
      const htmlLocations = this.calculateFaceLocation(response)
      console.log(htmlLocations)
       this.drawFaceBox(htmlLocations)
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
        <FaceRecognition htmlBoundingBoxes={this.state.htmlBoundingBoxes} />
      </div>
    )
  }
}

export default App;
