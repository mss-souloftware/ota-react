import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <Fragment>
        <li><Link to="/">Home One</Link></li>
        <li><Link to="/home-two">Home Two</Link></li>
        <li><Link to="/home-three">Home Three</Link></li>
    </Fragment>
);
export const Services = () => (
    <Fragment>
        <li><Link to="/creative-and-design">Creative & Design</Link></li>
        <li><Link to="/app-development">App Development</Link></li>
        <li><Link to="/cyber-security">Cyber Security</Link></li>
        <li><Link to="/digital-marketing">Digital Marketing</Link></li>
        <li><Link to="/lead-generation">Lead Generation</Link></li>
        <li><Link to="/seo">SEO</Link></li>
        <li><Link to="/smm">SMM</Link></li>
        <li><Link to="/video-animation">Video Animation</Link></li>
        <li><Link to="/web-development">Web Development</Link></li>
    </Fragment>
);
export const Page = () => (
    <Fragment>
        <li><Link to="/our-work">Our Work</Link></li>
        <li><Link to="/projects-details">Projects Details</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
        <li><Link to="/error">404 Page</Link></li>
    </Fragment>
);
export const News = () => (
    <Fragment>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/blog-details">Blog Details</Link></li>
    </Fragment>
);
