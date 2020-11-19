import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox';
import BoundingBoxesList from '../BoundingBoxesList/BoundingBoxesList';


const FaceRecognition = ({htmlBoundingBoxes, imageUrl}) => {
    return  (
        <div className="center mt2">
          <div className="image-container relative"> 


            <img src={imageUrl}
               width="500"
               id="inputImage"
            />  

            {

              imageUrl !== ''
              ?  <BoundingBoxesList htmlBoundingBoxes={htmlBoundingBoxes} />
              : null

            }

              

            
           </div>
        </div>
    )
}

export default FaceRecognition;

