import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import g1 from "../../assets/images/home/gallery1.jpg";
import g2 from "../../assets/images/home/gallery2.jpg";
import g3 from "../../assets/images/home/gallery3.jpg";
import g4 from "../../assets/images/home/gallery4.jpg";
import g5 from "../../assets/images/home/gallery5.jpg";
import g6 from "../../assets/images/home/gallery6.jpg";

const FooterOne = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <footer className="main__footer">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="top-inner">
                            <div className="left__top">
                                <h3>Looking For best It business solution</h3>
                            </div>
                            <div className="right__top">
                                <div className="btn-box">
                                    <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__one">
                    <div className="footer-widget-section">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget footer-logo-widget wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <figure className="footer-logo">
                                            <Link to="/"><img src={Logo} alt="" /></Link>
                                        </figure>
                                        <div className="text">
                                            <p>Whether you're looking to launch a new website, develop a mobile app, or optimize your digital marketing strategy, Outsource to Asia has the expertise and resources to help you succeed. Partner with us today and unlock your full potential in the digital realm.</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link to="about.html" className="theme-btn theme-btn-one"><i className="icon-02"></i> About Us</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget news-letter-widget ml_80 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="widget-title">
                                            <h4>Newletter</h4>
                                        </div>
                                        <div className="text">
                                            <p>Explore in-depth analyses of industry trends, insider tips from our team of experts, and success stories from businesses like yours.</p>
                                        </div>
                                        <div className="subscribe-inner">
                                            <form action="contact" method="post" className="subscribe-form" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Your mail address *" required="" />
                                                    <div className="btn-box">
                                                        <button className="theme-btn theme-btn-one" type="submit"><i className="icon-02"></i> GO</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget office-widget wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="widget-title">
                                            <h4>Official info:</h4>
                                        </div>
                                        <div className="widget-content">
                                            <p>2093 Philadelphia Pike, Claymont, DE 19703, USA</p>
                                            <Link to="tel:+13022062889">+ 1 (302) 206 2889</Link> <br />
                                            <Link to="mailto:info@outsourcetoasia.co">info@outsourcetoasia.co</Link>
                                        </div>
                                        <br></br>
                                        <div className="widget-content">
                                            <p>Suite # 603, 6th Floor, Business Avenue, Block 6, PECHS, Karachi, Pakistan</p>
                                            <Link to="tel:+923360021555">+92 (336) 0021555</Link> <br />
                                            <Link to="mailto:info@outsourcetoasia.co">info@outsourcetoasia.co</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column pr-0">
                                    <div className="footer-widget gallery-widget wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="widget-title">
                                            <h4>Gallery</h4>
                                        </div>
                                        <div className="widget_content">
                                            <ul className="instagram_list clearfix">
                                                <li>
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <Link to="/projects-details"><img src={g2} alt="" /></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <Link to="/projects-details"><img src={g3} alt="" /></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <Link to="/projects-details"><img src={g4} alt="" /></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <Link to="/projects-details"><img src={g1} alt="" /></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <Link to="/projects-details"><img src={g5} alt="" /></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <Link to="/projects-details"><img src={g6} alt="" /></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="auto-container">
                            <div className="bottom-inner">
                                <div className="copyright">
                                    <p>© 2024 <Link to="/">Outsource To Asia, LLC.</Link>  All rights reserved.</p>
                                </div>
                                <div className="policies">
                                    <ul>
                                        <li>
                                            <Link to="/privacy-policy">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-and-conditions">Terms & Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterOne;