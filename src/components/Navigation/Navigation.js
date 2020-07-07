import React from 'react';

const Navigation = () => {
    return(
       <div style={{display: 'flex', justifyContent: 'flex-end'}}
          className="pa3 f3 mt3 mr3 underline link black">
          <div className="mr3 pointer dim">Item 0</div>
          <div className="mr3 pointer dim">Item 1</div>
          <div className="pointer dim">Signout</div>
       </div>
    )
}

export default Navigation;