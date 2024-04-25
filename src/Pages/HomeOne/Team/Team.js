import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Slider from "react-slick";
import shape4 from "../../../assets/images/shapes/shape-04.png";
// import team1 from "../../../assets/images/home/client1.jpg";
// import team2 from "../../../assets/images/home/client2.jpg";
// import team3 from "../../../assets/images/home/client3.jpg";
// import team4 from "../../../assets/images/home/client4.jpg";
import WOW from 'wowjs';



import portfolio1 from "../../../assets/images/portfolio/portfolio-01.jpg";
import portfolio2 from "../../../assets/images/portfolio/portfolio-02.jpg";
import portfolio3 from "../../../assets/images/portfolio/portfolio-03.jpg";
import portfolio4 from "../../../assets/images/portfolio/portfolio-04.jpg";
import portfolio5 from "../../../assets/images/portfolio/portfolio-05.jpg";
import portfolio6 from "../../../assets/images/portfolio/portfolio-06.jpg";
import portfolio7 from "../../../assets/images/portfolio/portfolio-07.jpg";
import portfolio8 from "../../../assets/images/portfolio/portfolio-08.jpg";

let allSlidesFirst = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};


const Team = () => {
    useEffect(() => {
        new WOW.WOW({
            mobile: false
        }).init();
    }, []);

    // const teamData = [
    //     {
    //         id: 1,
    //         name: 'Wade Warren',
    //         image: team1,
    //         data_aos_delay: '00ms',
    //     },
    //     {
    //         id: 2,
    //         name: 'Esther Howard',
    //         image: team2,
    //         data_aos_delay: '100ms',
    //     },
    //     {
    //         id: 3,
    //         name: 'Bessie Cooper',
    //         image: team3,
    //         data_aos_delay: '200ms',
    //     },
    //     {
    //         id: 4,
    //         name: 'Dianne Russell',
    //         image: team4,
    //         data_aos_delay: '300ms',
    //     },
    // ];

    // const pricingData = [
    //     {
    //         id: 1,
    //         price_name: 'Basic',
    //         list_a: '20GB Space',
    //         list_b: '10GB Bandwidth',
    //         list_c: '2 Databases',
    //         list_d: '1 Accounts',
    //         list_e: '24th Support',
    //         amount: '200',
    //         time: 'm',
    //         delay: '100ms',
    //     },
    //     {
    //         id: 2,
    //         price_name: 'Personal',
    //         list_a: '20GB Space',
    //         list_b: '10GB Bandwidth',
    //         list_c: '2 Databases',
    //         list_d: '1 Accounts',
    //         list_e: '24th Support',
    //         amount: '300',
    //         time: 'm',
    //         delay: '200ms',
    //     },
    //     {
    //         id: 3,
    //         price_name: 'Business',
    //         list_a: '20GB Space',
    //         list_b: '10GB Bandwidth',
    //         list_c: '2 Databases',
    //         list_d: '1 Accounts',
    //         list_e: '24th Support',
    //         amount: '400',
    //         time: 'm',
    //         delay: '300ms',
    //     },
    // ];

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
        <section className="team__section see__pad p_relative">
            <div className="pattern-layer">
                <div className="pattern-3 p_absolute" data-parallax='{"y": 50}' style={{ backgroundImage: `url(${shape4})` }}></div>
            </div>
            <div className="auto-container">
                <div className="title__data">
                    <div className="sub__title">
                        <h4>Team Members</h4>
                    </div>
                    <div className="title">
                        <h2>We Have Expert Member</h2>
                    </div>
                </div>
                <div className="row">
                    {/* {teamData.map((item, id)=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={id}>
                            <div className="team__block wow fadeInUp animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms">
                                <div className="team__img">
                                    <figure>
                                        <img src={item.image} alt="" />
                                    </figure>
                                </div>
                                <div className="team__name">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="team__media">
                                    <ul>
                                        <li><Link to="#">FB.</Link></li>
                                        <li><Link to="#">TW.</Link></li>
                                        <li><Link to="#">LI</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))} */}

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
            </div>
            <div className="accomplised__section">
                <div className="auto-container">
                    <div className="accomplised__data p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-4 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shape4})` }}></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="title__data">
                                    <div className="sub__title">
                                        <h4> WHAT WE'VE ACCOMPLISED</h4>
                                    </div>
                                    <div className="title">
                                        <h2>Experience Innovation, Expertise & Excellence in Every Pixel.</h2>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link to="contact.html" className="theme-btn theme-btn-one"><i className="icon-02"></i> Join the Success Story Today!</Link>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-4 col-md-12">
                                <div className="funfact__data">
                                    <div className="funfact__content one">
                                        <div className="count-outer count-box">
                                            {/* <span className="plus">+</span> */}
                                            <h1 className="count-text"><CountUp start={0} end={95} /><span className="two">%</span></h1>
                                        </div>
                                        <p>Client Satisfaction Rate</p>
                                    </div>
                                    <div className="funfact__content two">
                                        <div className="count-outer count-box">
                                            {/* <span className="plus">+</span> */}
                                            <h1 className="count-text"><CountUp start={0} end={500} /><span className="two">+</span></h1>

                                        </div>
                                        <p>Successful Projects Completed</p>
                                    </div>
                                    <div className="funfact__content three">
                                        <div className="count-outer count-box">
                                            {/* <span className="plus">+</span> */}
                                            <h1 className="count-text"><CountUp start={0} end={10} /><span className="two">+</span></h1>
                                        </div>
                                        <p> Years of Industry Experience</p>
                                    </div>
                                    {/* <div className="funfact__content one">
                                        <div className="count-outer count-box">
                                            {<span className="plus">+</span> }
                                            <h1 className="count-text"><CountUp start={0} end={98} /><span className="two">%</span></h1>
                                        </div>
                                        <p>On-Time Project Delivery</p>
                                    </div>
                                    <div className="funfact__content three">
                                        <div className="count-outer count-box">
                                            <span className="plus">+</span>
                                            <h1 className="count-text"><CountUp start={0} end={"24/7"} /><span className="two"></span></h1>
                                        </div>
                                        <p> Support & Maintenance</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;