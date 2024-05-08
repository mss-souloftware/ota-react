import React, { useState } from 'react';
import { pageTitle } from '../../PageTitle';
import HeaderOne from '../../Header/HeaderOne';
import FooterOne from '../../Footer/FooterOne';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

import g1 from "../../../assets/images/services/inner/app.jpg";

import two from "../../../assets/images/services/contact.jpg";
import mainBanner from "../../../assets/images/services/inner/creative-banner.jpg";

import two1 from "../../../assets/images/services/inner/creative-Cta.jpg";


import accrD from "../../../assets/images/services/inner/creative-and-design/creative-service.jpg";
import accr1 from "../../../assets/images/services/inner/creative-and-design/logoService.jpg";
import accr2 from "../../../assets/images/services/inner/creative-and-design/ui.jpg";
import accr3 from "../../../assets/images/services/inner/creative-and-design/branding.jpg";
import accr4 from "../../../assets/images/services/inner/creative-and-design/graphic.jpg";
import accr5 from "../../../assets/images/services/inner/creative-and-design/print.jpg";


const Services = () => {
    pageTitle('App Development');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });



    const handleSubmit = (e) => {
        e.preventDefault();

        // Your logic to handle form submission goes here
        console.log('Form submitted:', formData);

        // Clear the form fields after submission if needed
        setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
    };

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionChange = (eventKey) => {
        setActiveAccordion(eventKey);
    };

    return (

        <>
            <HeaderOne></HeaderOne>
            <section className="page__title p_relative bgOverlay">
                <div className="bg-layer" style={{ backgroundImage: `url(${g1})` }}></div>
                <div className="auto-container">
                    <div className="content__box p_relative">
                        <ul className="bread__crumb">
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <span> -</span>
                                <Link to="/app-development">App Development</Link>
                            </li>

                        </ul>
                        <h1 className="title">App Development</h1>
                    </div>
                </div>
            </section>

            <section className="blog__section see__pad p_relative">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about__text__block">
                                <div className="sub__title">
                                    <h4>YOUR VISION, OUR CODE</h4>
                                </div>
                                <div className="title two">
                                    <h2>
                                        Building App <span>Excellence</span>
                                    </h2>
                                </div>
                                <div className="texts">
                                    <p>
                                        We are your gateway to digital innovation. Our app development services are not one-size-fits-all. We understand that every business is unique, with its own set of goals, challenges, and requirements. That's why we take a personalized approach to app development, working closely with you to understand your vision and objectives and create a custom solution that meets your needs and exceeds your expectations.
                                    </p>
                                </div>
                                <div className="btn-box">
                                    <Link to="/about" className="theme-btn theme-btn-one">
                                        <i className="icon-02"></i> Our Work
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <img src={mainBanner} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="p_relative">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="sub__title">
                                <h4>WHAT WE OFFER</h4>
                            </div>
                            <div className="title two">
                                <h2>
                                    Apps That <span>Wow</span>, Solutions That Work
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12"></div>
                        <div className="col-lg-6 col-md-12">
                            <div className="normaol__text">
                                <p>
                                    In today's digital world, having a mobile app is essential for reaching and engaging with your audience on the go. At Outsource to Asia, we specialize in crafting innovative and user-friendly mobile apps that drive results and elevate your brand to new heights.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="blog__section see__pad p_relative">
                <div className="auto-container">
                    <div className="row align-items-end">
                        <div className="col-lg-5 col-md-12">
                            <h5 className='text-uppercase'>Here's how we can help:</h5>
                            <div className='serviceAccr'>
                                <Accordion activeKey={activeAccordion} onSelect={handleAccordionChange}>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2852 17.3647L3.82243 18.7506C2.39103 19.0164 1.67534 19.1493 1.26303 18.737C0.850719 18.3246 0.983619 17.6089 1.24943 16.1774L2.63523 8.7143C2.85745 7.51762 2.96856 6.91925 3.36302 6.5577C3.75749 6.19616 4.47889 6.1256 5.9217 5.98448C7.31227 5.84847 8.6283 5.37177 10 4L16 10.0005C14.6283 11.3723 14.1513 12.6874 14.0151 14.0781C13.8738 15.5211 13.8031 16.2426 13.4416 16.637C13.0801 17.0314 12.4818 17.1425 11.2852 17.3647Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                                                <path d="M9 13.2105C8.4405 13.1197 7.92895 12.8763 7.52632 12.4737M7.52632 12.4737C7.12368 12.0711 6.8803 11.5595 6.78947 11M7.52632 12.4737L2 18" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M10 4C10.7123 2.9491 11.6771 1.1812 13.1065 1.01098C14.0822 0.894791 14.8906 1.70312 16.5072 3.31978L16.6802 3.49277C18.2969 5.10944 19.1052 5.91777 18.989 6.8935C18.8188 8.3229 17.0509 9.2877 16 10" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                                            </svg>
                                            Custom App Development</Accordion.Header>
                                        <Accordion.Body>
                                            Whether you're looking to build a native iOS app, an Android app, or a cross-platform app, our team of experienced developers will work closely with you to bring your vision to life. From concept to launch, we'll handle every aspect of the development process, ensuring that your app meets your unique needs and exceeds your expectations.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15" stroke="white" stroke-width="1.5" />
                                                <path d="M15 8H14C11.1716 8 9.7574 8 8.87868 8.87868C8 9.7574 8 11.1716 8 14V15C8 17.8284 8 19.2426 8.87868 20.1213C9.7574 21 11.1716 21 14 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V14C21 11.1716 21 9.7574 20.1213 8.87868C19.2426 8 17.8284 8 15 8Z" stroke="white" stroke-width="1.5" />
                                            </svg>
                                            UI/UX Design</Accordion.Header>
                                        <Accordion.Body>
                                            We understand the importance of a seamless and intuitive user experience. Our designers will create visually stunning interfaces and intuitive user flows that delight users and keep them coming back for more. From wireframing and prototyping to final design implementation, we'll ensure that every pixel is perfect.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.85746C6.5 -0.57443 15 0.53936 15 4.52832C15 7.5665 7.5 9 7.5 9C7.5 9 13.5 8.6935 13.5 11.451C13.5 16.0482 4 14.8628 4 14.8628" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5 5.5C4.33333 8.1667 3 13 3 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Backend Development</Accordion.Header>
                                        <Accordion.Body>
                                            A robust backend is essential for the functionality and scalability of your app. Our backend developers specialize in building scalable and secure backend systems that power your app's features and functionalities. From databases and APIs to server-side logic and push notifications, we've got you covered.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 15L10.1069 6.7479C8.76348 2.91597 8.09177 1 7 1C5.90823 1 5.23652 2.91597 3.89309 6.7479L1 15M3.5 8H10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20.9692 9.9392V14.4392M20.9692 9.9392C21.0164 9.1161 21.0182 8.4891 20.9194 7.9773C20.6864 6.7709 19.4258 6.0439 18.206 5.89599C17.0385 5.75447 16.1015 6.055 15.1535 7.4363M20.9692 9.9392H18.1256C17.6887 9.9392 17.2481 9.9603 16.8272 10.0773C14.2545 10.7925 14.4431 14.4003 17.0233 14.845C17.3099 14.8944 17.6025 14.9156 17.8927 14.9026C18.5703 14.8724 19.1955 14.545 19.7321 14.1301C20.3605 13.644 20.9692 12.9655 20.9692 11.9392V9.9392Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Quality Assurance</Accordion.Header>
                                        <Accordion.Body>
                                            We take quality seriously. Our QA engineers conduct rigorous testing to ensure that your app meets the highest standards of performance, security, and usability. From automated testing to manual testing, we'll identify and resolve any issues before your app goes live, ensuring a smooth and seamless user experience.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 10C1 6.25027 1 4.3754 1.95491 3.06107C2.26331 2.6366 2.6366 2.26331 3.06107 1.95491C4.3754 1 6.25027 1 10 1C13.7497 1 15.6246 1 16.9389 1.95491C17.3634 2.26331 17.7367 2.6366 18.0451 3.06107C19 4.3754 19 6.25027 19 10V12C19 15.7497 19 17.6246 18.0451 18.9389C17.7367 19.3634 17.3634 19.7367 16.9389 20.0451C15.6246 21 13.7497 21 10 21C6.25027 21 4.3754 21 3.06107 20.0451C2.6366 19.7367 2.26331 19.3634 1.95491 18.9389C1 17.6246 1 15.7497 1 12V10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 8.5H6M11.5 13.5H8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            App Maintenance & Support</Accordion.Header>
                                        <Accordion.Body>
                                            Your app is never truly finished. Our maintenance and support services ensure that your app remains up-to-date, secure, and optimized for performance. Whether it's fixing bugs, adding new features, or providing technical support, we're here to support you every step of the way.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-12"></div>
                        <div className="col-lg-6 col-md-12">
                            {activeAccordion === null && <img src={accrD} alt="Default" />}
                            {activeAccordion === "1" && <img src={accr1} alt="Logo" />}
                            {activeAccordion === "2" && <img src={accr2} alt="Description" />}
                            {activeAccordion === "3" && <img src={accr3} alt="Description" />}
                            {activeAccordion === "4" && <img src={accr4} alt="Description" />}
                            {activeAccordion === "5" && <img src={accr5} alt="Description" />}
                        </div>



                    </div>
                </div>
            </section>

            <div className="pride__section  p_relative see__pad">
                <div className="pride__layer" style={{ backgroundImage: `url(${two1})` }}></div>
                <div className="auto-container">
                    <div className="pride__block">
                        <h1>Where Apps Come to Life</h1>
                        <p className='mt-20'>Unleash your app vision with our development expertise! We are here to craft innovative solutions for your mobile app success.</p>
                        <div className="btn-box mt-50 mx-auto justify-content-center">
                            <Link to="/about" className="theme-btn theme-btn-one">
                                <i className="icon-02"></i> Let's Build Your Next Big Thing Together
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service__contact see__pad p_relative">
                <div className="auto-container">
                    <div className="service__contact__block">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="service__form__data">
                                    <div className="form__title">
                                        <div className="title__data">
                                            <div className="sub__title">
                                                <h4>Contact Us</h4>
                                            </div>
                                            <div className="title">
                                                <h2>Send message</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-inner">
                                        <form onSubmit={handleSubmit} method="post" action="contact.php" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-xl-6 form-group">
                                                    <input type="name" name="name" placeholder="Your Name *" required="" />
                                                </div>
                                                <div className="col-xl-6 col-lg-12 form-group">
                                                    <input type="email" name="email" placeholder="Your Email *" required="" />
                                                </div>
                                                <div className="col-xl-6 col-lg-12 form-group">
                                                    <input type="text" name="subject" placeholder="Your Subject " required="" />
                                                </div>
                                                <div className="col-xl-6 col-lg-12 form-group">
                                                    <input type="text" name="phone" placeholder="Your Phone " required="" />
                                                </div>
                                                <div className="ccol-xl-6 col-lg-12 form-group">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="col-xl-12 form-group message-btn btn-box">
                                                    <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send your Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 p_relative">
                                <div className="service__contact__img">
                                    <figure>
                                        <img src={two} alt=" /" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne></FooterOne>
        </>
    );
};

export default Services;
