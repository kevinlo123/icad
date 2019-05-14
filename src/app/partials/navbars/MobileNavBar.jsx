import React, { Component }  from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

class MobileNavBar extends Component {
   
   constructor () {
      super();
      this.state = {
         menuOpen: false
      }
   }

   handleStateChange (state) {
      this.setState({
         menuOpen: state.isOpen
      }); 
   }
   
   closeMenu () {
      this.setState({
         menuOpen: false
      });
   }

   toggleMenu () {
      this.setState(state => ({
         menuOpen: !state.menuOpen
      }));
   }

   render() {
      return (
         <nav className={"mobile-header"}>
            <Menu 
               burgerBarClassName={ "burger-bar" }
               isOpen={this.state.menuOpen}
               onStateChange={(state) => this.handleStateChange(state)}>
               <li className={"mobile-list-item"}>
                  <NavLink 
                     onClick={() => this.closeMenu()}
                     exact to="/"
                     activeClassName="selected"
                     className={"mobile-list-item--anchor"}>
                     <i className="fas fa-home fass"></i>
                     Home
                  </NavLink>
               </li>
               <li className={"mobile-list-item"}>
                  <NavLink 
                     onClick={() => this.closeMenu()}
                     to="/vehicle_wraps" 
                     activeClassName="selected" 
                     className={"mobile-list-item--anchor"}>
                     <i className="fas fa-car-side fass"></i>
                     Vehicle Wraps
                  </NavLink>
               </li>
               <li className={"mobile-list-item"}>
                  <NavLink 
                     onClick={() => this.closeMenu()} 
                     to="/large_format_printing" 
                     activeClassName="selected" 
                     className={"mobile-list-item--anchor"}>
                     <i className="fas fa-print fass"></i>
                     Large Format Printing
                  </NavLink>
               </li>
               <li className={"mobile-list-item"}>
                  <NavLink 
                     onClick={() => this.closeMenu()} 
                     to="/graphic_design" 
                     activeClassName="selected" 
                     className={"mobile-list-item--anchor"}>
                     <i className="fas fa-image fass"></i>
                     Graphic Design
                  </NavLink>
               </li>
               <li className={"mobile-list-item"}> 
                  <NavLink 
                     onClick={() => this.closeMenu()} 
                     to="/about" 
                     activeClassName="selected" 
                     className={"mobile-list-item--anchor"}>
                     <i className="fas fa-address-card fass"></i>
                     About Us
                  </NavLink>
               </li>
               <small>ICAD &#8482;</small>
            </Menu>
            <a href="tel:781-397-8166" className={"phone"}>
               <i className="fas fa-phone"></i>
            </a>
            <NavLink to="/quote" className={"get-a-quote"}>
               Get a Free Quote
            </NavLink>
         </nav>
      );
   }
}

export default MobileNavBar;