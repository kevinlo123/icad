import React, { Component }  from 'react';
import HeroBanner from './components/HeroBanner.jsx';
import Services from './components/Services.jsx';
import Info from './components/Info.jsx';
import ChooseUs from './components/ChooseUs.jsx';
import Testimonies from './components/Testimonies.jsx';
// import printer from '../../../images/printer.jpg';

class Home extends Component {
   render() {
      return (
         <section className="page-content">
            <HeroBanner/>
            <Services/>
            <Info/>
            <ChooseUs/>
            <Testimonies/>
         </section>
      );
   }
}

export default Home;