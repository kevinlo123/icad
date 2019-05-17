import React, { Component }  from 'react';
import logo from '../../images/icadi.png';

class Loader extends Component {
   render() {
      return (
         <div className={"loader-container"}>
            <img src={logo} alt={"icad logo"} className={"loader-container__logo-loader"} />
         </div>
      );
   }
}

export default Loader;