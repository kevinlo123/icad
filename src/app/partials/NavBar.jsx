import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';

class NavBar extends Component {
   
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
         <header>
            <nav className={"mobile-header"}>
               <Menu burgerBarClassName={ "burger-bar" } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} >
                  <li>
                     <NavLink 
                        onClick={() => this.closeMenu()}
                        exact to="/"
                        activeClassName="selected"
                        className={"menu-anchor"}>
                        <i className="fas fa-home fass"></i>
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                        onClick={() => this.closeMenu()}
                        to="/vehicle_wraps" 
                        activeClassName="selected" 
                        className={"menu-anchor"}>
                        <i className="fas fa-car-side fass"></i>
                        Vehicle Wraps
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                        onClick={() => this.closeMenu()} 
                        to="/large_format_printing" 
                        activeClassName="selected" 
                        className={"menu-anchor"}>
                        <i className="fas fa-print fass"></i>
                        Large Format Printing
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                        onClick={() => this.closeMenu()} 
                        to="/graphic_design" 
                        activeClassName="selected" 
                        className={"menu-anchor"}>
                        <i className="fas fa-image fass"></i>
                        Graphic Design
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                        onClick={() => this.closeMenu()} 
                        to="/about" 
                        activeClassName="selected" 
                        className={"menu-anchor"}>
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
            <nav className={"desktop-header"}>
               <h3>desktop header (style)</h3>
            </nav>
         </header>
      );
   }
}

export default NavBar;