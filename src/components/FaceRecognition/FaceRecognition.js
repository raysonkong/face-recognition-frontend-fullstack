import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox';
import BoundingBoxesList from '../BoundingBoxesList/BoundingBoxesList';


const FaceRecognition = ({htmlBoundingBoxes}) => {
    return  (
        <div className="center mt2">
          <div className="image-container absolute">
            <img src="https://images.indianexpress.com/2018/11/brazil-kit.jpg"
               width="500"
               id="inputImage"
            />


             <BoundingBoxesList htmlBoundingBoxes={htmlBoundingBoxes}/>

             
           </div>
        </div>
    )
}

export default FaceRecognition;

