import React, { Component } from 'react';
import WrappingVideo from '../../../../videos/wrapping.mp4'

class HeroBanner extends Component {
   // constructor() {
   //    super()
   //    this.video = React.createRef();
   // }

   // componentDidMount() {
   //    console.log(this.video)
   // }

   render() {
      return (
         <section className={"vidContain"}>
            <div className="vid">           
                  <video muted playsInline autoPlay ref={this.video} preload="preload" loop="loop">
                     <source src={WrappingVideo} type="video/mp4"></source>
                  </video> 
            </div>
            <h1 className={"content"}>VIDEOO1!!!!</h1>
         </section>
      );
   }
}

export default HeroBanner;