// Porfolio Landing page
// The only enabled landing page

import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import LeoHeader from "../component/header/LeoHeader";
import LeoFooter from "../component/footer/LeoFooter";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import Chatbot from '../component/chatbot/chatbot';
import { useLanguage } from '../translation/languageContext';
import { FaLink } from "react-icons/fa";


const PortfolioLanding = () => {
    const { t } = useLanguage();

    let title = t('aboutme'),
        description = t('aboutmedesc');
    // const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark">
            <Helmet pageTitle={t('rkguo')} />
            <LeoHeader homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className='inner text-left'>
                                        <span>{t('greeting')}</span>
                                        <h1 className="title">👋🏻 {t('name')}<br/>
                                        <TextLoop>
                                            <span> {t('id1')}</span>
                                            <span> {t('id2')}</span>
                                            <span> intp</span>
                                        </TextLoop>{" "}
                                        </h1>
                                        <h2>@ {t('location')}</h2>
                                        <div className="slide-btn">
                                            <a className="rn-button-style--2 btn-primary-color" href='mailto:leokwok1997@hotmail.com'>
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-leo.jpg" alt="About Images"/>
                                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                            <a className="rn-button-style--2 btn-solid" href="https://cw6g.short.gy/resume">
                                                <span style={{"display": "flex", "alignItems":"center"}}><FaCloudDownloadAlt />
                                                &nbsp;&nbsp;{t('resume')}
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Tech Stack Area  */}
            <div id="stack" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">{t('skill')}</h2>
                                    <p>{t('skilldesc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="4" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Tech Stack Area  */} 

            {/* Start Portfolio Area */}
            <div id="project-blog" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            {/* PLACEHOLDER */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">{t('blog')}</h2>
                                        <p>{t('blogdesc')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>


                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Blog Area */}

            {/* <div id="blog" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
            </div> */}
            {/* End Blog Area */}

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--0">
                    <ContactThree contactImages="/assets/images/about/about-leo-sm.jpg" contactTitle={t('connect')} />
                </div>
            </div>
            {/* End COntact Area */}

            <div id="blog" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>The End</h2>
                                    <p>{t('endaction')}</p>
                                    <p>👇🏻</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10 mt_sm--0">
                            <div className="col-lg-12">
                                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                    <a className="rn-button-style--2 rn-btn-small" href="https://github.com/LeoKwo/personal-website">
                                        <span style={{"textTransform": "none"}}>GitHub <FaLink/></span>
                                    </a>
                                </div>
                            </div>
                            {/* {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>    
                    </div>    
                </div>
            </div>

            <Chatbot />

            <LeoFooter />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
