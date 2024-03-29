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


// const igLink =
//     {Social: <FaInstagram /> , link: 'https://www.instagram.com/leokwo_rk/'}

class PortfolioDetailsPhotography extends Component{
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
        return(
            <React.Fragment>
                <PageHelmet pageTitle='rkguo gallery' />

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" color="color-black" logoname="logo.png" /> */}

                {/* <LeoHeader headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" logoname="logo.png" /> */}
                <LeoHeader2 logo="symbol-dark" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-gallery"  data-black-overlay="2">
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--33"  data-black-overlay="7"> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">rkguo gallery</h2>
                                    <p>Engineer by profession, artist by heart.</p>
                                    <p>Rage, rage against the dying of the light.</p>
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

                                        <h3>Captivating lights</h3>
                                        <p>I specialize in capturing urban landscapes, particularly entrancing cityscapes bathed in the hues of captivating sunsets. My deep fascination lies in the intricate dance of tonal nuances and delicate micro-contrasts.</p>

                                        <p>Here is a collection of my favorites over the years.</p>

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
