import React, { Component } from "react";
import { FaInstagram , FaLinkedinIn, FaGithub, FaMedium, FaLink } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'
import './header.css'
import LanguageSwitcher from "../../translation/languageSwitcher";
import { LanguageContext } from "../../translation/languageContext";


const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/ruikang-guo-540742102/'},
    {Social: <FaGithub /> , link: 'https://github.com/LeoKwo'},
    {Social: <FaMedium /> , link: 'https://medium.com/@rkguo/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/leokwo_rk/'},
]

class LeoHeader2 extends Component{
    static contextType = LanguageContext;

    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){
        const { t } = this.context;

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-leo-gray.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-leo-gray.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo-leo-gray.png" alt="Digital Agency" />;
        }
        
        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/" id="siteLogo" >
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','stack','project-blog', 'contact', 'photography']} currentClassName="is-current" offset={-200}>
                        
                            <li><a href="/">{t('home')}</a></li>
                            <li><a href="/#about">{t('aboutme')}</a></li>
                            <li><a href="/#stack">{t('skill')}</a></li>
                            <li><a href="/#project-blog">{t("blog")}</a></li>
                            <li><a href="/#contact">{t('connect')}</a></li>
                            <li><a href="/photography">{t('photo')}<FaLink/></a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-white d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <LanguageSwitcher/>
                        { /*
                        <div className="header-btn">
                            <a className="rn-btn" href="https://drive.google.com/file/d/1PF-JBs14ESYVeciCWOTRZEUUaBE0cVYt/view?usp=sharing">
                                <span>Get My Resume</span>
                            </a>
                        </div> */
                        }
                        {/* Start Humberger Menu  */}
                        <div style={{
                            display:"inline-flex",
                            justifyContent: "center"
                        }} className="humberger-menu d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger "
                            style={{
                                display:"inline-flex",
                                justifyContent: "center",
                                color: "rgba(198,201,216,.75)"
                            }}><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default LeoHeader2;