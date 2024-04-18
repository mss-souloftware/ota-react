import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";
import HomeTwo from "./Pages/HomeTwo/HomeTwo/HomeTwo";
import HomeThree from "./Pages/HomeThree/HomeThree/HomeThree";
import About from "./Pages/About/About";
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import CreativeAndDesign from "./Pages/Services/Inner/CreativeAndDesign";
import AppDevelopment from "./Pages/Services/Inner/AppDevelopment";
import ContentWriting from "./Pages/Services/Inner/ContentWriting";
import CyberSecurity from "./Pages/Services/Inner/CyberSecurity";
import DigitalMarketingPage from "./Pages/Services/Inner/DigitalMarketing";
import LeadGeneration from "./Pages/Services/Inner/LeadGeneration";
import SEO from "./Pages/Services/Inner/SEO";
import SMM from "./Pages/Services/Inner/SMM";
import VIdeoAnimation from "./Pages/Services/Inner/VIdeoAnimation";
import WebDevelopment from "./Pages/Services/Inner/WebDevelopment";
import ContentMarketing from "./Pages/Services/ContentMarketing";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import SeoMarketing from "./Pages/Services/SeoMarketing";
import UiDesign from "./Pages/Services/UiDesign";
import OurWork from "./Pages/Projects/Work";
import Projects from "./Pages/Projects/Projects";
import ProjectsDetails from "./Pages/Projects/ProjectsDetails";
import Pricing from "./Pages/Pricing/Pricing";
import Team from "./Pages/Team/Team";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Error from "./Pages/Error/Error";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Contact from "./Pages/Contact/Contact";
import WOW from 'wowjs';

function App() {
  
  useEffect(() => {
    new WOW.WOW({
      mobile: false
    }).init();
  }, []);
    
  return (
    <>
        <Router><Routes>
            <Route path="/" element={<HomeOne />} />
            <Route path="/home-two" element={<HomeTwo/>} />
            <Route path="/home-three" element={<HomeThree/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services-details" element={<ServicesDetails/>} />
            <Route path="/creative-and-design" element={<CreativeAndDesign/>} />
            <Route path="/app-development" element={<AppDevelopment/>} />
            <Route path="/content-writing" element={<ContentWriting/>} />
            <Route path="/cyber-security" element={<CyberSecurity/>} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage/>} />
            <Route path="/lead-generation" element={<LeadGeneration/>} />
            <Route path="/seo" element={<SEO/>} />
            <Route path="/smm" element={<SMM/>} />
            <Route path="/video-animation" element={<VIdeoAnimation/>} />
            <Route path="/web-development" element={<WebDevelopment/>} />
            <Route path="/content-marketing" element={<ContentMarketing/>} />
            <Route path="/digital-marketing" element={<DigitalMarketing/>} />
            <Route path="/seo-marketing" element={<SeoMarketing/>} />
            <Route path="/ui-ux-design" element={<UiDesign/>} />
            <Route path="/our-work" element={<OurWork/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects-details" element={<ProjectsDetails/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/testimonial" element={<Testimonial/>} />
            <Route path="/error" element={<Error/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog-details" element={<BlogDetails/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes></Router>
        <ScrollTop/>

    </>
  )
}

export default App
