import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
import { FaGithub, FaCloud } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import LeoHeader from "../component/header/LeoHeader";
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
        const { t, language } = this.context;
        return(
            <div className="active-dark">
            <React.Fragment>
                <PageHelmet pageTitle={t('project5')} />
                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" color="color-black" logoname="logo.png" /> */}

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" logoname="logo.png" /> */}
                <LeoHeader logo="symbol-dark" color="color-black" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-guogenius"  data-black-overlay="4">
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

                                                <li style={{"color": "rgba(255,255,255,0.75)"}}><a href={`${GitHubLink.link}`}>{GitHubLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;GitHub</li>
                                                <li style={{"color": "rgba(255,255,255,0.75)"}}><a href={`${GuoGeniusLink.link}`}>{GuoGeniusLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;Heroku App</li>
                                                
                                            </ul>
                                        </div>

                                        <h2>{t('demovideo')}</h2>

                                        {
                                            language === 'zh' ? (
                                                <div className="portfolio-view-list d-flex flex-wrap" style={{"marginBottom": "50px"}}>
                                                    <div className="port-view" style={{"marginTop" : "30px", "width" : "100%", "height" : "400px"}}>
                                                        <iframe width="100%" height="100%" src="//player.bilibili.com/player.html?bvid=BV1qFVyzMEpq&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="portfolio-view-list d-flex flex-wrap" style={{"marginBottom": "50px"}}>
                                                    <div className="port-view" style={{"marginTop" : "30px", "width" : "100%", "height" : "400px"}}>
                                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G8MiBVOZdX4?si=4HMTIN6nK7gmbfcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        
                                        <h2>{t('screenshot')}</h2>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <img src="/assets/images/custom/chatbot-2.jpg"></img>
                                            </div>
                                            
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        )
    }
}
export default PortfolioDetailsChatbot;
