import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div className="pt4">
          <h2 className="tc"> Input a Link for face detection...</h2>

          <div className="container center">
            <div className="form center shadow-5">
              <input className="br3 f3 pa2 w-70 dib"/>
              <button className="f3 br3 grow w-30 dib">Detect!</button>
            </div>
          </div>
        </div>
    );
}

export default ImageLinkForm;