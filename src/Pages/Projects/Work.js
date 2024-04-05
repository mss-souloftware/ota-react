import React from 'react';
import { pageTitle } from '../PageTitle';
// import BreadCrumb from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FooterOne from '../Footer/FooterOne';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import portfolio1 from "../../assets/images/portfolio/portfolio-01.jpg";
import portfolio2 from "../../assets/images/portfolio/portfolio-02.jpg";
import portfolio3 from "../../assets/images/portfolio/portfolio-03.jpg";
import portfolio4 from "../../assets/images/portfolio/portfolio-04.jpg";
import portfolio5 from "../../assets/images/portfolio/portfolio-05.jpg";
import portfolio6 from "../../assets/images/portfolio/portfolio-06.jpg";
import portfolio7 from "../../assets/images/portfolio/portfolio-07.jpg";
import portfolio8 from "../../assets/images/portfolio/portfolio-08.jpg";
import g1 from "../../assets/images/banner/heroBanner.jpg";

let allSlidesFirst = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
};

let allSlidesSecond = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    rtl: true
};

let logoDesign = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
};

const Projects = () => {
    pageTitle('Projects');
    const projrctData = [
        {
            id: 1,
            image: portfolio1,
        },
        {
            id: 2,
            image: portfolio2,
        },
        {
            id: 3,
            image: portfolio3,
        },
        {
            id: 4,
            image: portfolio4,
        },
        {
            id: 5,
            image: portfolio5,
        },
        {
            id: 6,
            image: portfolio6,
        },
        {
            id: 7,
            image: portfolio7,
        },
        {
            id: 8,
            image: portfolio8,
        },
    ];
    return (

        <>
            <HeaderOne></HeaderOne>
            {/* <BreadCrumb></BreadCrumb> */}
            <section className="page__title p_relative">
                <div className="bg-layer" style={{ backgroundImage: `url(${g1})` }}></div>
                <div className="auto-container">

                </div>
            </section>
            <div className='container pt-5'>
                <div className="row">
                    <div className="col-lg-8 col-md-12 text-center mx-auto pt-5">
                        <div className="about__text__block">
                            <div className="sub__title">
                                <h4>out source to asia</h4>
                            </div>
                            <div className="title two">
                                <h2>
                                    our work <span>showcase</span>.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container bannerBg pt-5'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 text-center mx-auto">
                        <Tabs
                            defaultActiveKey="all"
                            id="uncontrolled-tab-example"
                            className="mb-3 justify-content-center border-0 navTabWork"
                        >
                            <Tab eventKey="all" title="ALL">
                                <div className="p_relative see__pad">
                                    <div className="row">
                                        <Slider {...allSlidesFirst}>
                                            {projrctData.map((item, id) => (
                                                <div className="col-lg-3 col-md-6 colsm-12 mb-4" key={id}>
                                                    <div className="portfolio__block p_relative p-2">
                                                        <div className="portfolio__image">
                                                            <figure>
                                                                <img src={item.image} alt="" />
                                                            </figure>
                                                        </div>
                                                        <div className="lower__content p_absolute">
                                                            <div className="protfolio__text">
                                                                <div className="text__block">
                                                                    <h4>Sustainability</h4>
                                                                    <p>Design</p>
                                                                </div>
                                                                <div className="text__block_two">
                                                                    <h5>2019</h5>
                                                                </div>
                                                            </div>
                                                            <div className="protfolio__button">
                                                                <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>

                                    <div className="row">
                                        <Slider {...allSlidesSecond}>
                                            {projrctData.map((item, id) => (
                                                <div className="col-lg-3 col-md-6 colsm-12 mb-4" key={id}>
                                                    <div className="portfolio__block p_relative p-2">
                                                        <div className="portfolio__image">
                                                            <figure>
                                                                <img src={item.image} alt="" />
                                                            </figure>
                                                        </div>
                                                        <div className="lower__content p_absolute">
                                                            <div className="protfolio__text">
                                                                <div className="text__block">
                                                                    <h4>Sustainability</h4>
                                                                    <p>Design</p>
                                                                </div>
                                                                <div className="text__block_two">
                                                                    <h5>2019</h5>
                                                                </div>
                                                            </div>
                                                            <div className="protfolio__button">
                                                                <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="logo" title="Logo Design">
                                <Slider {...logoDesign}>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio1} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio2} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio3} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio1} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio2} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio3} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio2} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio1} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </Tab>
                            <Tab eventKey="website" title="Website Design">
                                <Slider {...logoDesign}>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio4} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio5} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio6} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio5} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio6} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </Tab>
                            <Tab eventKey="app" title="App Design">
                                <Slider {...logoDesign}>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio4} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio5} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio6} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio5} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 colsm-12 mb-4">
                                        <div className="portfolio__block p_relative p-2">
                                            <div className="portfolio__image">
                                                <figure>
                                                    <img src={portfolio6} alt="" />
                                                </figure>
                                            </div>
                                            <div className="lower__content p_absolute">
                                                <div className="protfolio__text">
                                                    <div className="text__block">
                                                        <h4>Sustainability</h4>
                                                        <p>Design</p>
                                                    </div>
                                                    <div className="text__block_two">
                                                        <h5>2019</h5>
                                                    </div>
                                                </div>
                                                <div className="protfolio__button">
                                                    <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div >

            <FooterOne></FooterOne>
        </>
    );
};

export default Projects;
