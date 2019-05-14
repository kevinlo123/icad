import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './partials/Loader.jsx'
import NavBar from './partials/NavBar.jsx';
import Home from './pages/home/Home.jsx';
import Wraps from './pages/wraps/Wraps.jsx';
import Printing from './pages/printing/Printing.jsx';
import GraphicDesign from './pages/graphicdesign/GraphicDesign.jsx';
import Quote from './pages/quote/Quote.jsx';
import About from './pages/about/About.jsx';
import Footer from './partials/Footer.jsx';
import '../stylesheets/App.scss';

class App extends Component {
   
   constructor() {
      super();
      this.state = { 
         isLoading: true
      }
   }

   async wait(ms) {
      return new Promise(resolve => {
         setTimeout(resolve => {
            this.setState({ 
               isLoading: false
            });
         }, ms);
      });
    }

   async componentDidMount() {
      try {
         await this.wait(3000);         
      } catch(err) {
         console.log(`An error occured the app component did not mount ${err}`);
      }
   }

   render() {
      return (
         this.state.isLoading ? <Loader /> : 
         <div id="app" className={this.state.isLoading ? 'hide': 'fadeIn'}>
            <NavBar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/vehicle_wraps" component={Wraps} />
               <Route path="/large_format_printing" component={Printing} />
               <Route path="/graphic_design" component={GraphicDesign} />
               <Route path="/about" component={About} />
               <Route path="/quote" component={Quote} />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default App;
