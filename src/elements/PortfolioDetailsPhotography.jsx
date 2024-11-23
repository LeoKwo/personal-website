import React, { Component, useState, useCallback } from "react";

import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
// import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import LeoHeader2 from "../component/header/LeoHeader2";
import LeoFooter from "../component/footer/LeoFooter";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Carousel, { Modal, ModalGateway } from "react-images";
import { LanguageContext } from "../translation/languageContext";

class PortfolioDetailsPhotography extends Component{
    static contextType = LanguageContext;

    constructor () {
        super()
        this.state = {
          isOpen: false,
          currentImage: 0,
          viewerIsOpen: false
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
                <PageHelmet pageTitle={t('gallery')} />
                <LeoHeader2 logo="symbol-dark" />

                <div className="rn-page-title-area pt--120 pb--190 bg-gallery"  data-black-overlay="2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{t('gallery')}</h2>
                                    <p>{t('gallerytext1')}</p>
                                    <p>{t('gallerytext2')}</p>
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

                                        <h3>{t('gallerytext3')}</h3>
                                        <p>{t('gallerytext4')}</p>

                                        <p>{t('gallerytext5')}</p>

                                        {/* <Gallery photos={photos} direction={"row"} /> */}
                                        <Gallery photos={photos} direction={"row"} onClick={(event, { photo, index }) => this.setState({ currentImage : index, viewerIsOpen : true })} />
                                        
                                        {this.state.viewerIsOpen ? (
                                            <ModalGateway>
                                                
                                                    <Modal onClose={() => {
                                                        this.setState({ 
                                                            currentImage : 0,
                                                            viewerIsOpen : false
                                                        });
                                                    }}>
                                                        <Carousel
                                                            currentIndex={this.state.currentImage}
                                                            views={photos.map(x => ({
                                                                ...x,
                                                                srcset: x.srcSet,
                                                                caption: x.title
                                                            }))}
                                                        />
                                                    </Modal>
                                                
                                            </ModalGateway>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
export default PortfolioDetailsPhotography;
