import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import BannerBg from "../../../assets/images/shapes/shape-02.png";
import AboutUs from "../../../assets/images/home/2.jpg";
import shape1 from "../../../assets/images/shapes/shape-01.png";


const About = () => {
  return (
    <section className="about__section p_relative see__pad">
      <div className="pattern-layer">
        <div
          className="pattern-2 p_absolute"
          data-parallax='{"x": -50}'
          style={{ backgroundImage: `url(${BannerBg})` }}
        ></div>
      </div>
      <div className="boild__text">
        <h1>DataMatrix</h1>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about__block p_relative">
              <figure
                className="wow zoomIn animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <img src={AboutUs} alt="" />
              </figure>
              <div
                className="funfact__content about"
                style={{ backgroundImage: `url(${shape1})` }}
              >
                <div className="count-outer count-box">
                  <h1 className="count-text">
                    <CountUp start={0} end={10} /><span>K+</span>
                  </h1>

                </div>
                <p>World wide Client</p>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-12">
            <div className="about__text__block">
              <div className="sub__title">
                <h4>ABOUT US</h4>
              </div>
              <div className="title two">
                <h2>
                  Empowering Your <span>Digital Future</span>, One Pixel at a Time.
                </h2>
              </div>
              <div className="texts">
                <p>
                  As pioneers in the digital landscape, we're not just a digital agency; we're architects of the future. Our revamped website is your portal to a world where imagination meets implementation, where ideas are transformed into digital realities that propel businesses forward.
                </p>
                <p>
                  Discover the power of collaboration as we partner with you to bring your vision to life. From startups to enterprises, we're committed to unlocking your full potential in the digital sphere. Whether you're seeking to innovate, expand, or optimize, our team of experts is dedicated to crafting tailored solutions that meet your unique needs and drive measurable results.
                </p>
              </div>
              <div className="btn-box">
                <Link to="/about" className="theme-btn theme-btn-one">
                  <i className="icon-02"></i> More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
