import './BoundingBox.css';
import React from 'react';


const BoundingBox = ({boundingBox}) => {
    return(
        <div 
          className="bounding-box"
          style={boundingBox}
        >
        </div>
    )

}

export default BoundingBox;