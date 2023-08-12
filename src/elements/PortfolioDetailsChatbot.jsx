import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
import { FaGithub, FaMedium } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import LeoHeader2 from "../component/header/LeoHeader2";
import LeoFooter from "../component/footer/LeoFooter";

const GitHubLink =
    {Social: <FaGithub /> , link: 'https://github.com/LeoKwo/chatbot_rkguo'}
const MediumLink =
    {Social: <FaMedium /> , link: 'https://medium.com/@rkguo/llm-powered-chatbot-for-your-website-a-step-by-step-guide-37449b607e92'}

class PortfolioDetailsChatbot extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Chatbot' />
                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" color="color-black" logoname="logo.png" /> */}

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" logoname="logo.png" /> */}
                <LeoHeader2 logo="symbol-dark" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-chatbot"  data-black-overlay="4">

                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--33"  data-black-overlay="7"> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">rkguo.xyz chatbot</h2>
                                    <p>GenAI + Cloud</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Project Overview</h2>
                                        <p className="subtitle">Full stack application developed using generative AI and backend engineering, deployed to the cloud</p>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p> */}

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Frontend</span>
                                                <h4>React</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Backend</span>
                                                <h4>FastAPI</h4>
                                                <h4>Python 3.11</h4>

                                            </div>

                                            <div className="port-view">
                                                <span>Database</span>
                                                <h4>MongoDB</h4>
                                                <h5>MongoDB Atlas</h5>
                                            </div>

                                            <div className="port-view">
                                                <span>Deployment</span>
                                                <h4>Heroku</h4>
                                            </div>
                                        </div>

                                        <hr/>
                                        <hr/>

                                        <h3>For more information</h3>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">

                                                <li><a href={`${GitHubLink.link}`}>{GitHubLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;Chatbot github repository </li>
                                                <li><a href={`${MediumLink.link}`}>{MediumLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;Medium article documenting my process</li>
                                                
                                            </ul>
                                        </div>

                                        <h3>Screenshots</h3>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <img src="/assets/images/custom/chatbot-1.jpg"></img>
                                            </div>
                                            
                                        </div>

                                        {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">

                                                <li></li>
                                                <li>da</li>

                                                {
                                                // SocialShare.map((val , i) => (
                                                //     <li key={i}><a href={`${val.link}`}>{val.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;Check out</li>
                                                // ))
                                                }
                                            </ul>
                                        </div> */}

                                    {/* </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>

                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                {/* <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10"> */}
                            {/* Start Single Portfolio */}
                            {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div> */}
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div> */}
                             {/* End Single Portfolio */}
                        {/* </div>
                    </div> */}
                </div>
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <LeoFooter />


            </React.Fragment>
        )
    }
}
export default PortfolioDetailsChatbot;
