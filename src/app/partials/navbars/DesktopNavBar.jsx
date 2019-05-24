import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/icadi.png';

class DesktopNavBar extends Component {
      render() {
         return (
            <nav className={"desktop-header"}>
               <div className={"list-items-container"}>
                  <img src={logo} alt={"icad logo"} className={"list-items-container__logo"}/>
                  <li className={"list-items-container__list-item"}>
                     <NavLink 
                        exact to="/"
                        activeClassName="selected"
                        className={"list-items-container__list-item--link"}>
                        Home
                     </NavLink>
                  </li>
                  <li className={"list-items-container__list-item"}>
                     <NavLink 
                        to="/vehicle_wraps" 
                        activeClassName="selected" 
                        className={"list-items-container__list-item--link"}>
                        Vehicle Wraps
                     </NavLink>
                  </li>
                  <li className={"list-items-container__list-item"}>
                     <NavLink 
                        to="/large_format_printing" 
                        activeClassName="selected" 
                        className={"list-items-container__list-item--link"}>
                        Large Format Printing
                     </NavLink>
                  </li>
                  <li className={"list-items-container__list-item"}>
                     <NavLink 
                        to="/graphic_design" 
                        activeClassName="selected" 
                        className={"list-items-container__list-item--link"}>
                        Graphic Design
                     </NavLink>
                  </li>
                  <li className={"list-items-container__list-item"}>
                     <NavLink 
                        to="/about" 
                        activeClassName="selected" 
                        className={"list-items-container__list-item--link"}>
                        About Us
                     </NavLink>
                  </li>
               </div>
               <div className={"phone-quote-container"}>
                  <a href="tel:781-397-8166" className={"phone-quote-container__phone"}>
                     <i className="fas fa-phone"></i>
                  </a>
                  <NavLink to="/quote" className={"phone-quote-container__quote"}>
                     Get a Free Quote
                  </NavLink>
               </div>
            </nav>
         );
      }
   }
   
   export default DesktopNavBar;