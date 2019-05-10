import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './partials/NavBar.jsx';
import Home from './pages/home/Home.jsx';
import Wraps from './pages/wraps/Wraps.jsx';
import Printing from './pages/printing/Printing.jsx';
import GraphicDesign from './pages/graphicdesign/GraphicDesign.jsx';
import Quote from './pages/quote/Quote.jsx';
import Footer from './partials/Footer.jsx';
import '../stylesheets/App.scss';

class App extends Component {
   render() {
      return (
         <div id="app">
            <NavBar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/vehicle_wraps" component={Wraps} />
               <Route path="/large_format_printing" component={Printing} />
               <Route path="/graphic_design" component={GraphicDesign} />
               <Route path="/quote" component={Quote} />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default App;
