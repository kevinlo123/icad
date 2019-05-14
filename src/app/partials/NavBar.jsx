import React, { Component }  from 'react';
import MobileNavBar from './navbars/MobileNavBar.jsx'
import DesktopNavBar from './navbars/DesktopNavBar.jsx'

class NavBar extends Component {
   render() {
      return (
         <header>
            <MobileNavBar />
            <DesktopNavBar />
         </header>
      );
   }
}

export default NavBar;