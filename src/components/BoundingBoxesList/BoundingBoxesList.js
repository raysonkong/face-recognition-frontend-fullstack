import BoundingBox from '../BoundingBox/BoundingBox';
import React from 'react';

const BoundingBoxesList = ({htmlBoundingBoxes}) => {
    const boxesList = htmlBoundingBoxes.map((boundingBox, index) => {
        return <BoundingBox key={index} boundingBox={boundingBox}/>
    })

    return (
        <div>
           {boxesList}
        </div>
    )
}

export default BoundingBoxesList;