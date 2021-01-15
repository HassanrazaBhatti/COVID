import React from 'react';
import Logo from "./img/portfolio/p1.jpg";
import Logo1 from "./img/portfolio/p2.jpg";
import Logo2 from "./img/portfolio/p3.jpg";


export const Projects = (props) => {
    return (
        <section className="project-area">
  <div className="container">
    <div className="project-title pb-5">
      <h1 className="text-uppercase title-h1">Recently Done Project</h1>
      <h1 className="text-uppercase title-h1">Quality Work</h1>
    </div>
    <div className="row grid">
      <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
        <div className="our-project">
          <div className="img">
            <a className="test-popup-link" href="./img/portfolio/p1.jpg">
              <img src={Logo} alt="portfolio-1" className="img-fluid" />
            </a>
          </div>
          <div className="title py-4">
            <h4 className="text-uppercase">Minimul Desing</h4>
            <span className="text-secondary">Latest, Portfolio</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 element-item popular">
        <div className="our-project">
          <div className="img">
            <a className="test-popup-link" href="./img/portfolio/p2.jpg">
              <img src={Logo1} alt="portfolio-2" className="img-fluid" />
            </a>
          </div>
          <div className="title py-4">
            <h4 className="text-uppercase">Paint Wall</h4>
            <span className="text-secondary">Popular, Portfolio</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 element-item popular">
        <div className="our-project">
          <div className="img">
            <a className="test-popup-link" href="./img/portfolio/p3.jpg">
              <img src={Logo2} alt="portfolio-3" className="img-fluid" />
            </a>
          </div>
          <div className="title py-4">
            <h4 className="text-uppercase">Female light</h4>
            <span className="text-secondary">Popular, Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
