import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

class DesktopNavBar extends Component {
      render() {
         return (
            <nav className={"desktop-header"}>
               <li>
                  <NavLink 
                     exact to="/"
                     activeClassName="selected"
                     className={""}>
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     to="/vehicle_wraps" 
                     activeClassName="selected" 
                     className={""}>
                     Vehicle Wraps
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     to="/large_format_printing" 
                     activeClassName="selected" 
                     className={""}>
                     Large Format Printing
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     to="/graphic_design" 
                     activeClassName="selected" 
                     className={""}>
                     Graphic Design
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     to="/about" 
                     activeClassName="selected" 
                     className={""}>
                     About Us
                  </NavLink>
               </li>
               <a href="tel:781-397-8166" className={""}>
                  <i className="fas fa-phone"></i>
               </a>
               <NavLink to="/quote" className={""}>
                  Get a Free Quote
               </NavLink>
            </nav>
         );
      }
   }
   
   export default DesktopNavBar;