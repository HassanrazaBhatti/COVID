import React from "react";
import logo from "../src/img/banner/banner-image.png";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

function Banner() {
return (
        <section className="site-banner">
            <div className="container">
                <div className="row">
                    <Fade left>
                    <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hey</h3>
                        <h1 className="title-text text-uppercase">I am <br />Hassan</h1>
                        <h4 className="title-text text-uppercase"><Pulse forever>Senior React Developer</Pulse></h4>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="col-lg-6 col-md-12 banner-image">
                         <img src={logo} alt="banner-img" className="img-fluid" />
                         </div>
                         </Fade>
                </div>
            </div>
            
        </section>
    );
}

export default Banner;