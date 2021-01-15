import React from 'react'

export const Services = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                    <div className="sevices-img text-center py-4">
                        <img src={props.src} alt="Services-4" />
                    </div>
                    <div className="card-body text-center">
                     <h5 className="card-title text-uppercase font-roboto">{props.title}</h5>
                        <p className="card-text text-secondary">
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Services;