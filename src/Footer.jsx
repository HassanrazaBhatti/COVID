import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="footer-area">
  <div className="container">
    <div className>
      <div className="site-logo text-center py-4">
        <a href="#"><img src="./img/logo.png" alt="logo" /></a>
      </div>
      <div className="social text-center">
        <h5 className="text-uppercase">Follow me</h5>
        <a href="#"><i className="fab fa-facebook" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
      </div>
      <div className="copyrights text-center">
        <p className="para">
          Copyright ©2019 All rights reserved | This template is made with by
          <a href="#"><span style={{color: 'var(--primary-color)'}}>Daily Tuition</span></a>
        </p>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}
