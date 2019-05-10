import React, { Component }  from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Wraps from '../pages/wraps/Wraps.jsx';
import Printing from '../pages/printing/Printing.jsx';
import GraphicDesign from '../pages/graphicdesign/GraphicDesign.jsx';

class NavBar extends Component {
   render() {
      return (
         <header>
            <nav>
               <ul>
                  <li>
                     <NavLink exact to="/" activeClassName="selected">
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/vehicle_wraps" activeClassName="selected">
                        Vehicle Wraps
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/large_format_printing" activeClassName="selected">
                        Large Format Printing
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/graphic_design" activeClassName="selected">
                        Graphic Design
                     </NavLink>
                  </li>
               </ul>
            </nav>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/vehicle_wraps" component={Wraps} />
               <Route path="/large_format_printing" component={Printing} />
               <Route path="/graphic_design" component={GraphicDesign} />
            </Switch>
         </header>
      );
   }
}

export default NavBar;