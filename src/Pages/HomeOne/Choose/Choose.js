import React from 'react';
import choose1 from "../../../assets/images/home/3.jpg";
import choose2 from "../../../assets/images/resource/choose-02.png";
import choose3 from "../../../assets/images/resource/choose-02.png";
import choose4 from "../../../assets/images/resource/choose-02.png";

const Choose = () => {
    return (
        <section className="choose__us p_relative">
            <div className="choose__us__data">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="choose__block">
                                <figure>
                                    <img src={choose1} alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="choose__block__right">
                                <div className="title__data">
                                    <div className="sub__title">
                                        <h4>WHY CHOOSE US</h4>
                                    </div>
                                    <div className="title">
                                        <h2>Your Vision, Our Expertise</h2>
                                    </div>
                                </div>
                                <div className="team__data">
                                    <div className="team__data__left">
                                        <figure>
                                        <img src={choose2} alt="" />
                                    </figure>
                                        
                                    </div>
                                    <div className="team__data__right">
                                        <h3>Expertise</h3>
                                        <p>With years of experience and a team of skilled professionals, we bring a wealth of expertise to every project. From design and development to marketing and beyond, we have the knowledge and know-how to deliver results that exceed your expectations.</p>
                                    </div>
                                </div>
                                <div className="team__data">
                                    <div className="team__data__left">
                                        <img src={choose3} alt="" />
                                    </div>
                                    <div className="team__data__right">
                                        <h3>Quality</h3>
                                        <p>We take pride in delivering high-quality work that stands the test of time. Whether it's a website, a mobile app, or a marketing campaign, you can trust that our solutions are built to last and designed to perform.</p>
                                    </div>
                                </div>
                                <div className="team__data three">
                                    <div className="team__data__left">
                                        <img src={choose4} alt="" />
                                    </div>
                                    <div className="team__data__right">
                                        <h3>Innovation</h3>
                                        <p>We're not content to rest on our laurels. We're constantly pushing the boundaries of what's possible, exploring new technologies, and embracing new ideas to deliver innovative solutions that keep you ahead of the curve.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;