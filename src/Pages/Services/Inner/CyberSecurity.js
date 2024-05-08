import React, { useState } from 'react';
import { pageTitle } from '../../PageTitle';
import HeaderOne from '../../Header/HeaderOne';
import FooterOne from '../../Footer/FooterOne';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

import g1 from "../../../assets/images/services/inner/cyber.jpg";

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
    pageTitle('Cyber Security');

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
                                <Link to="/cyber-security">Cyber Security</Link>
                            </li>

                        </ul>
                        <h1 className="title">Cyber Security</h1>
                    </div>
                </div>
            </section>

            <section className="blog__section see__pad p_relative">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about__text__block">
                                <div className="sub__title">
                                    <h4>DEFEND, DETECT, RESPOND</h4>
                                </div>
                                <div className="title two">
                                    <h2>
                                        Our Three Pillars of <span>Cyber Protection</span>

                                    </h2>
                                </div>
                                <div className="texts">
                                    <p>
                                        We are your shield in the digital age. We understand that every business has unique security needs and challenges. That's why we offer customized cybersecurity solutions tailored to your specific requirements, industry regulations, and risk tolerance. Whether you're a small startup or a large enterprise, we'll work closely with you to develop a comprehensive security strategy that aligns with your goals and protects your valuable assets.
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
                                    Guarding Your <span>Digital Fortress</span>, One Byte at a Time
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12"></div>
                        <div className="col-lg-6 col-md-12">
                            <div className="normaol__text">
                                <p> In an increasingly digital world, the importance of cyber security cannot be overstated. With cyber threats on the rise, protecting your business from potential breaches and attacks is essential to safeguarding your sensitive data, maintaining customer trust, and preserving your reputation. At Outsource to Asia, we specialize in providing comprehensive cyber security solutions to help businesses of all sizes mitigate risks and stay protected against evolving threats.
                                </p>
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
                                            Risk Assessment and Analysis
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Our team of experienced cyber security professionals will conduct a thorough assessment of your existing systems and infrastructure to identify potential vulnerabilities and areas of risk. We'll analyze your security posture, review your current policies and procedures, and provide actionable recommendations to strengthen your defenses and reduce your exposure to cyber threats.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15" stroke="white" stroke-width="1.5" />
                                                <path d="M15 8H14C11.1716 8 9.7574 8 8.87868 8.87868C8 9.7574 8 11.1716 8 14V15C8 17.8284 8 19.2426 8.87868 20.1213C9.7574 21 11.1716 21 14 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V14C21 11.1716 21 9.7574 20.1213 8.87868C19.2426 8 17.8284 8 15 8Z" stroke="white" stroke-width="1.5" />
                                            </svg>
                                            Security Implementation and Configuration</Accordion.Header>
                                        <Accordion.Body>
                                            Based on the findings of our risk assessment, we'll work with you to implement and configure the necessary security measures to protect your systems, networks, and data. From firewalls and intrusion detection systems to antivirus software and encryption protocols, we'll deploy robust security solutions that meet your specific needs and align with industry best practices.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.85746C6.5 -0.57443 15 0.53936 15 4.52832C15 7.5665 7.5 9 7.5 9C7.5 9 13.5 8.6935 13.5 11.451C13.5 16.0482 4 14.8628 4 14.8628" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5 5.5C4.33333 8.1667 3 13 3 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Continuous Monitoring and Threat Detection
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Cyber threats are constantly evolving, which is why it's essential to have real-time monitoring and threat detection capabilities in place. Our team will implement advanced monitoring tools and technologies to continuously monitor your systems and networks for suspicious activity, unauthorized access attempts, and other indicators of compromise. We'll provide timely alerts and responses to potential threats, minimizing the impact of security incidents and ensuring the integrity of your systems and data.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 15L10.1069 6.7479C8.76348 2.91597 8.09177 1 7 1C5.90823 1 5.23652 2.91597 3.89309 6.7479L1 15M3.5 8H10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20.9692 9.9392V14.4392M20.9692 9.9392C21.0164 9.1161 21.0182 8.4891 20.9194 7.9773C20.6864 6.7709 19.4258 6.0439 18.206 5.89599C17.0385 5.75447 16.1015 6.055 15.1535 7.4363M20.9692 9.9392H18.1256C17.6887 9.9392 17.2481 9.9603 16.8272 10.0773C14.2545 10.7925 14.4431 14.4003 17.0233 14.845C17.3099 14.8944 17.6025 14.9156 17.8927 14.9026C18.5703 14.8724 19.1955 14.545 19.7321 14.1301C20.3605 13.644 20.9692 12.9655 20.9692 11.9392V9.9392Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Incident Response and Remediation</Accordion.Header>
                                        <Accordion.Body>
                                            In the event of a security incident or breach, our team will provide rapid incident response and remediation services to contain the threat, mitigate the damage, and restore normal operations as quickly as possible. We'll work with you to develop and implement a comprehensive incident response plan, conduct forensic investigations to determine the root cause of the incident, and implement corrective actions to prevent future occurrences.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 10C1 6.25027 1 4.3754 1.95491 3.06107C2.26331 2.6366 2.6366 2.26331 3.06107 1.95491C4.3754 1 6.25027 1 10 1C13.7497 1 15.6246 1 16.9389 1.95491C17.3634 2.26331 17.7367 2.6366 18.0451 3.06107C19 4.3754 19 6.25027 19 10V12C19 15.7497 19 17.6246 18.0451 18.9389C17.7367 19.3634 17.3634 19.7367 16.9389 20.0451C15.6246 21 13.7497 21 10 21C6.25027 21 4.3754 21 3.06107 20.0451C2.6366 19.7367 2.26331 19.3634 1.95491 18.9389C1 17.6246 1 15.7497 1 12V10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 8.5H6M11.5 13.5H8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Security Awareness Training</Accordion.Header>
                                        <Accordion.Body>
                                            Human error remains one of the leading causes of security breaches, which is why it's essential to educate your employees about the importance of cyber security and how to recognize and respond to potential threats. Our security awareness training programs will empower your employees with the knowledge and skills they need to identify phishing attempts, protect sensitive information, and practice safe cyber hygiene.
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
                        <h1>Fortify Your Defenses, Secure Your Future</h1>
                        <p className='mt-20'>Fortify your business against cyber threats! We offer comprehensive solutions for your digital defense to protect your data and safeguard your future.
                        </p>
                        <div className="btn-box mt-50 mx-auto justify-content-center">
                            <Link to="/about" className="theme-btn theme-btn-one">
                                <i className="icon-02"></i> Let's Shield Your Business from Cyber Storms
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
