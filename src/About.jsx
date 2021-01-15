import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
export const About = () => {
    return (
        <div>
            <>
            <Slide left>
                <section className="about-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 about-title">
                                <h2 className="text-uppercase pt-5">
                                    <span>Let me</span>
                                    <span>introduce</span>
                                    <span>myself</span>
                                </h2>
                                <div className="paragraph py-4 w-75">
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure obcaecati vel
                                        possimus officia maiores perferendis ut! Quos, perspiciatis.
                                    </p>
                                    <p className="para">
                                        It is a long established fact that a reader will be distracted by the readable content
                                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                        here
                                    </p>
                                </div>
                                <button type="button" className="btn button primary-button text-uppercase">Download cv</button>
                            </div>   
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="experience-area">
                                    <div className="d-flex flex-row years-area">
                                        <h2 className="p-3 years">10</h2>
                                        <h2>
                                            <span>Years</span>
                                            <span>Experience</span>
                                            <span>Working</span>
                                        </h2>
                                    </div>
                                    <div className="d-flex flex-row flex-wrap call-area">
                                        <span><i className="fas fa-phone-alt fa-3x px-3" /></span>
                                        <div className="call-now">
                                            <a href="#" className="text-uppercase h4 font-roboto">Call Now</a>
                                            <span className="font-roboto py-2">(+91)-800-555-4986</span>
                                        </div>
                                    </div>
                                    <div className="bg-panel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </Slide>
            </>
        </div>
    )
}
