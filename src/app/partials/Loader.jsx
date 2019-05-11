import React, { Component }  from 'react';
import logo from '../../images/icadi.png';

class Loader extends Component {
   render() {
      const divStyle = {
         padding: '5rem'
      };

      return (
         <div style={ divStyle }>
            <img src={logo} alt={"icad logo"} className={"logo-loader"} />
            <span className="pulse"></span>
         </div>
      );
   }
}

export default Loader;