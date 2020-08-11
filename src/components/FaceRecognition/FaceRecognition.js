import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({boundingBox}) => {
    return  (
        <div className="center mt2">
          <div className="image-container absolute">
            <img src="https://samples.clarifai.com/face-det.jpg"
               width="500"
               id="inputImage"
            />
             <div className="bounding-box"
                  style={boundingBox}
             ></div>
           </div>
        </div>
    )
}

export default FaceRecognition;

