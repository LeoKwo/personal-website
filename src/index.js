// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
// import Demo from './page-demo/Demo';
// import MainDemo from './home/MainDemo';
// import Startup from './home/Startup';
// import Paralax from './home/Paralax';
// import HomePortfolio from './home/HomePortfolio';
// import DigitalAgency from './home/DigitalAgency';
// import CreativeAgency from './home/CreativeAgency';
// import PersonalPortfolio from './home/PersonalPortfolio';
// import Business from './home/Business';
// import StudioAgency from './home/StudioAgency';
// import PortfolioLanding from './home/PortfolioLanding';
// import CreativeLanding from './home/CreativeLanding';
// import HomeParticles from './home/HomeParticles';
// import CreativePortfolio from './home/CreativePortfolio';
// import DesignerPortfolio from './home/DesignerPortfolio';
// import InteriorLanding from './home/Interior';
// import CorporateBusiness from './home/CorporateBusiness';
// import InteractiveAgency from './home/InteractiveAgency';

// Dark Home Layout 
// import DarkMainDemo from './dark/MainDemo';
import LeoPortfolioLanding from './dark/LeoPortfolioLanding';

// Element Layout
// import Service from "./elements/Service";
// import ServiceDetails0 from "./elements/ServiceDetails0.jsx";
// import ServiceDetails1 from "./elements/ServiceDetails1";
// import ServiceDetails2 from "./elements/ServiceDetails2";
// import ServiceDetails from "./elements/ServiceDetails";
// import About from "./elements/About";
// import Contact from "./elements/Contact";
// import PortfolioDetails from "./elements/PortfolioDetails";
import PortfolioDetailsWavelength from "./elements/PortfolioDetailsWavelength";
import PortfolioDetailsMern from "./elements/PortfolioDetailsMern";
import PortfolioDetailsStudent from "./elements/PortfolioDetailsStudent";
import PortfolioDetailsChatbot  from './elements/PortfolioDetailsChatbot';
import PortfolioDetailsGuoGenius  from './elements/PortfolioDetailsGuoGenius';
import PortfolioDetailsPhotography from "./elements/PortfolioDetailsPhotography";

// import Blog from "./elements/Blog";
// import BlogDetails from "./elements/BlogDetails";
// import error404 from "./elements/error404";


// Blocks Layout

// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import HomePortfolio from './home/HomePortfolio';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={LeoPortfolioLanding}/>
                        
                        <Route exact path={`${process.env.PUBLIC_URL}/project-blog-details-wavelength`} component={PortfolioDetailsWavelength}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project-blog-details-mern`} component={PortfolioDetailsMern}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project-blog-details-student`} component={PortfolioDetailsStudent}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project-blog-details-chatbot`} component={PortfolioDetailsChatbot}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project-blog-details-guogenius`} component={PortfolioDetailsGuoGenius}/>


                        <Route exact path={`${process.env.PUBLIC_URL}/photography`} component={PortfolioDetailsPhotography}/>]

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();