import BoundingBox from '../BoundingBox/BoundingBox';
import React from 'react';

const BoundingBoxesList = ({htmlBoundingBoxes}) => {
    const boxesList = htmlBoundingBoxes.map(boundingBox => {
        return <BoundingBox boundingBox={boundingBox}/>
    })

    return (
        <div>
           {boxesList}
        </div>
    )
}

export default BoundingBoxesList;