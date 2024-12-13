import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
import { FaGithub, FaCloud } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import LeoHeader2 from "../component/header/LeoHeader2";
import LeoFooter from "../component/footer/LeoFooter";
import { LanguageContext } from "../translation/languageContext";

const GitHubLink =
    {Social: <FaGithub /> , link: 'https://github.com/LeoKwo/GuoGenius'}

const GuoGeniusLink =
    {Social: <FaCloud />, link: 'https://guogenius-e9cbdf445f45.herokuapp.com/'}

class PortfolioDetailsChatbot extends Component{
    static contextType = LanguageContext;

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
        const { t } = this.context;

        return(
            <React.Fragment>
                <PageHelmet pageTitle={t('project5')} />
                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" color="color-black" logoname="logo.png" /> */}

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" logoname="logo.png" /> */}
                <LeoHeader2 logo="symbol-dark" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-guogenius"  data-black-overlay="4">

                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--33"  data-black-overlay="7"> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{t('project5')}</h2>
                                    <p>LangChain + Pinecone + Streamlit + Heroku</p>
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
                                        <h2>{t('projectoverview')}</h2>
                                        <p className="subtitle">{t('project5text1')}</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>{t('frontend')}</span>
                                                <h4>Streamlit</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>{t('backend')}</span>
                                                <h4>Python 3.11</h4>
                                                <h4>LangChain Agent</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>{t('database')}</span>
                                                <h4>Pinecone {t('vector')} {t('database')}</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>{t('deployment')}</span>
                                                <h4>Heroku</h4>
                                            </div>
                                        </div>

                                        <hr/>
                                        <hr/>

                                        <h3>{t('project5text2')}</h3>

                                        <p>
                                            {t('project5text3')}
                                        </p>

                                        <p>
                                            {t('project5text4')}    
                                        </p>

                                        <p>
                                            {t('project5text5')}    
                                        </p>

                                        <h3>{t('learnmore')}</h3>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">

                                                <li><a href={`${GitHubLink.link}`}>{GitHubLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;GitHub</li>
                                                <li><a href={`${GuoGeniusLink.link}`}>{GuoGeniusLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;Heroku App</li>
                                                
                                            </ul>
                                        </div>

                                        <h2>{t('demovideo')}</h2>

                                        <div className="portfolio-view-list d-flex flex-wrap" style={{"marginBottom": "50px"}}>
                                            <div className="port-view" style={{"marginTop" : "30px", "width" : "100%", "height" : "400px"}}>
                                                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/G8MiBVOZdX4?si=4HMTIN6nK7gmbfcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G8MiBVOZdX4?si=4HMTIN6nK7gmbfcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                
                                            </div>
                                        </div>

                                        <h2>{t('screenshot')}</h2>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <img src="/assets/images/custom/chatbot-2.jpg"></img>
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
