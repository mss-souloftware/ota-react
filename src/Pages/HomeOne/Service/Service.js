import React from 'react';
import { Link } from 'react-router-dom';


const Service = () => {
    const servicesData = [
      {
        id: 1,
        title: 'Design',
        description: "Elevate your brand's visual identity with our cutting-edge design services. Our team of talented designers combines creativity with expertise to deliver stunning designs that captivate and inspire. From logos and branding to web and print materials, we'll help you stand out in a crowded marketplace and leave a lasting impression on your audience.",
        icon: 'icon-04',
        href: '/services-details',
        data_aos_delay:'00ms',
      },
      {
        id: 2,
        title: 'Development',
        description: "Bring your digital vision to life with our comprehensive development services. Whether you need a custom website, a mobile app, or a robust e-commerce platform, our team of developers has the skills and experience to turn your ideas into reality. With a focus on quality, efficiency, and innovation, we'll build solutions that meet your unique needs and exceed your expectations.",
        icon: 'icon-12',
        href: '/services-details',
        data_aos_delay:'200ms',
      },
      {
        id: 3,
        title: 'Marketing',
        description: "Maximize your online presence and reach your target audience with our results-driven marketing services. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media and content marketing, we'll develop a customized strategy to help you achieve your marketing goals. Whether you're looking to increase brand awareness, drive traffic to your website, or boost sales, we'll help you get the results you need to succeed in today's competitive marketplace.",
        icon: 'icon-08',
        href: '/services-details',
        data_aos_delay:'400ms',
      },
    ];
    return (
        <section className="service__section p_relative">
            <div className="auto-container">
                <div className="service__data">
                    <div className="title__data">
                        <div className="sub__title">
                            <h4>OUR SERVICES</h4>
                        </div>
                        <div className="title">
                            <h2>Delivering Tailored Solutions</h2>
                        </div>
                    </div>
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms" key={id}>
                            <div className="service__block">
                                <div className="service__icon">
                                    <i className={item.icon}></i>
                                    <div className="service__icon__two"></div>
                                </div>
                                <div className="service__text">
                                    <h4><Link to={item.href}>{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="service__button">
                                    <Link to={item.href}><i className="icon-05"></i></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;