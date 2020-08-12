import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox';
import BoundingBoxesList from '../BoundingBoxesList/BoundingBoxesList';


const FaceRecognition = ({htmlBoundingBoxes, imageUrl, onLoad, onError}) => {
    return  (
        <div className="center mt2">
          <div className="image-container absolute"> 


            <img src={imageUrl}
               width="500"
               id="inputImage"
               onload={onLoad}
               onError={onError}
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

