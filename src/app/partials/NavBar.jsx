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
      this.setState({menuOpen: state.isOpen})  
   }
   
   closeMenu () {
      this.setState({menuOpen: false})
   }

   toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
   }

   render() {
      return (
         <header className={"mobile-header"}>
            <nav>
               <Menu burgerBarClassName={ "burger-bar" } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} >
                  <li>
                     <NavLink onClick={() => this.closeMenu()} exact to="/" activeClassName="selected" className={"menu-anchor"}>
                        <i className="fas fa-home"></i>
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink onClick={() => this.closeMenu()} to="/vehicle_wraps" activeClassName="selected" className={"menu-anchor"}>
                        <i className="fas fa-car-side"></i>
                        Vehicle Wraps
                     </NavLink>
                  </li>
                  <li>
                     <NavLink onClick={() => this.closeMenu()} to="/large_format_printing" activeClassName="selected" className={"menu-anchor"}>
                        <i className="fas fa-print"></i>
                        Large Format Printing
                     </NavLink>
                  </li>
                  <li>
                     <NavLink onClick={() => this.closeMenu()} to="/graphic_design" activeClassName="selected" className={"menu-anchor"}>
                        <i className="fas fa-sign"></i>
                        Graphic Design
                     </NavLink>
                  </li>
                  <small>Image Concepts and Designs &#8482;</small>
               </Menu>
            </nav>
            <NavLink to="/quote" className={"get-a-quote"}>
               Get a Free Quote
            </NavLink>
         </header>
      );
   }
}

export default NavBar;