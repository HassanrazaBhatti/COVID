import React from 'react';

export function Contact(){
return(
<section className="subscribe-us-area">
  <div className="container subscribe">
    <div className="row">
      <div className="col-lg-12 text-center subscribe-title">
        <h4 className="text-uppercase">Get Update From anywhere</h4>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          consequuntur.</p>
      </div>
    </div>
    <div className="d-sm-flex justify-content-center">
      <form className="w-50">
        <div className="row d-flex flex-row flex-wrap">
          <div className="col input-textbox">
            <input type="text" id="txtemail" className="form-control" placeholder="Email" />
          </div>
          <div className="col">
            <div className="btn-submit">
              <button type="submit" className="btn btn-success float-right">Subscribe</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

);
}