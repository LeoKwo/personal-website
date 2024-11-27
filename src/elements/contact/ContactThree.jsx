// Used by portfolioLanding

import React, { Component } from "react";
import { LanguageContext } from "../../translation/languageContext";

class ContactThree extends Component{
    static contextType = LanguageContext;

    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        const { language, t } = this.context;

        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">{t('callme')}<a href="tel:+12064037493">+1 2064037493</a> / <a href="tel:+8613342964176">+86 13342964176</a>{t('emailme')}
                                    <a href="mailto:leokwok1997@hotmail.com"> leokwok1997@hotmail.com</a>{t('socialme')}<a href="https://www.linkedin.com/in/ruikang-guo-540742102/">LinkedIn, </a>
                                    <a href="https://github.com/LeoKwo">GitHub, </a>
                                    <a href="https://medium.com/@rkguo/">Medium, </a>& <a href="https://www.instagram.com/leokwo_rk/">Instagram</a>.
                                </p>
                            </div>
                            <img src={`${this.props.contactImages}`} alt="image"/>
                            
                        </div>
                        {language === 'zh' && (
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30" style={{borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", height: "700px", flexDirection: "column"}}>
                                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYyDqUqh_mBQJsFAO0wXXotBCY5Eng2O79HU90gFiAmB_JUg/viewform?embedded=true" width="95%" height="95%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                                <h3 className="title">{this.props.contactConnect}</h3>
                                <img style={{maxWidth: "200px", marginTop: "50px"}} src="/assets/images/qr/qrcode.png"></img>
                            </div>
                        </div>)}
                        {language === 'en' && (
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30" style={{background: "#c6c9d8", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", height: "700px"}}>
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYyDqUqh_mBQJsFAO0wXXotBCY5Eng2O79HU90gFiAmB_JUg/viewform?embedded=true" width="95%" height="95%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;