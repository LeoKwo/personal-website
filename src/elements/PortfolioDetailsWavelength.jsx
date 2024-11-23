import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import LeoHeader2 from "../component/header/LeoHeader2";
import LeoFooter from "../component/footer/LeoFooter";
import { LanguageContext } from "../translation/languageContext";

const SocialShare = [
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/leokwo_rk/'},
    {Social: <FaGithub /> , link: 'https://github.com/LeoKwo'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/ruikang-guo-540742102/'},
]

const GitHubLink =
    {Social: <FaGithub /> , link: 'https://github.com/LeoKwo/wavelength'}

class PortfolioDetailsWavelength extends Component{
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
                <PageHelmet pageTitle={t('project1')} />

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" color="color-black" logoname="logo.png" /> */}

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" logoname="logo.png" /> */}
                <LeoHeader2 logo="symbol-dark" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-wavelength"  data-black-overlay="4">

                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--33"  data-black-overlay="7"> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{t('project1')}</h2>
                                    <p>{t('project1topic')}</p>
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
                                        <p className="subtitle">{t('project1text1')}</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>{t('frontend')}</span>
                                                <h4>Kotlin</h4>
                                                <h5>Retrofit</h5>
                                                <h5>Coil</h5>
                                                <h5>Wasabeef Animations</h5>
                                                <h5>Glide</h5>
                                                <h5>Coroutines</h5>
                                                <h5>Android Studio</h5>
                                            </div>

                                            <div className="port-view">
                                                <span>{t('backend')}</span>
                                                <h4>Spring Boot</h4>
                                                <h4>Java 11</h4>
                                                <h5>Mongo Java Driver</h5>
                                                <h5>IntelliJ</h5>
                                                <h4>Firebase Authentication</h4>

                                            </div>

                                            <div className="port-view">
                                                <span>{t('database')}</span>
                                                <h4>MongoDB</h4>
                                                <h5>MongoDB Atlas</h5>
                                                <h4>Digital Ocean Spaces</h4>
                                                <h5>Amazon S3</h5>
                                            </div>

                                            <div className="port-view">
                                                <span>{t('deployment')}</span>
                                                <h4>Heroku</h4>
                                            </div>
                                        </div>

                                        <hr/>
                                        <hr/>

                                        <h3>{t('learnmore')}</h3>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">

                                                <li><a href={`${GitHubLink.link}`}>{GitHubLink.Social}</a>&nbsp;&nbsp;&nbsp;&nbsp;GitHub</li>
                                                
                                            </ul>
                                        </div>

                                        <h3>{t('feature')}</h3>

                                        <p>Music playback</p>
                                        <p>On-demand playback</p>
                                        <p>Favorite/unfavorite songs</p>
                                        <p>Display song album, artist, song name</p>
                                        <p>Render song album art</p>
                                        <p>Search songs within library</p>
                                        <p>Create and delete custom playlists</p>
                                        <p>Add/remove songs to custom playlist with custom images</p>
                                        <p>Deployed backend application to Heroku</p>
                                        <p>Create accounts and login to existing accounts</p>
                                        <p>General application preferences settings</p>

                                        <h3>{t('futurefeature')}</h3>

                                        <p>Upload your own music to the library</p>
                                        <p>Lyric support</p>

                                        <h3>{t('screenshot')}</h3>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-1.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-2.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-3.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-4.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-5.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-6.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-7.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-8.png" width={"250em"}></img>
                                            </div>
                                            <div className="port-view">
                                                <img src="/assets/images/custom/wavelength-9.png" width={"250em"}></img>
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
export default PortfolioDetailsWavelength;
