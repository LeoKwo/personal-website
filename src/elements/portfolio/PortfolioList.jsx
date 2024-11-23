import React, { Component } from "react";
import {Link} from "react-router-dom";
import { LanguageContext } from "../../translation/languageContext";

class PortfolioList extends Component{
    static contextType = LanguageContext;

    render(){
        const { t } = this.context;

        const PortfolioListContent = [
            {
                image: 'image-wavelength',
                category: t('project1topic'),
                title: t('project1')
            },
            {
                image: 'image-student-management-sys',
                category: 'Thymeleaf + Spring Boot + MySQL + Docker',
                title: t('project2')
            },
            {
                image: 'image-exercise-track',
                category: 'MongoDB + Express.js + React + Node.js',
                title: t('project3')
            },
            {
                image: 'image-chatbot',
                category: t('project4topic'),
                title: t('project4')
            },
            {
                image: 'image-guogenius',
                category: t('project4topic'),
                title: t('project5'),
            }
        ]

        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {
                    <div className={`${column}`} key="2">
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${PortfolioListContent[4].image}`}></div>
                                <div className={`bg-blr-image ${PortfolioListContent[4].image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{PortfolioListContent[4].category}</p>
                                    <h4><a href="/project-blog-details-guogenius">{PortfolioListContent[4].title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/project-blog-details-guogenius">{t('learnmore')}</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/project-blog-details-guogenius"></Link>
                        </div>
                    </div>
                }
                {
                    <div className={`${column}`} key="2">
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${PortfolioListContent[3].image}`}></div>
                                <div className={`bg-blr-image ${PortfolioListContent[3].image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{PortfolioListContent[3].category}</p>
                                    <h4><a href="/project-blog-details-chatbot">{PortfolioListContent[3].title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/project-blog-details-chatbot">{t('learnmore')}</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/project-blog-details-chatbot"></Link>
                        </div>
                    </div>
                }
                {
                    // list.map((value , index) => (
                    //     <div className={`${column}`} key={index}>
                    //         <div className={`portfolio ${styevariation}`}>
                    //             <div className="thumbnail-inner">
                    //                 <div className={`thumbnail ${value.image}`}></div>
                    //                 <div className={`bg-blr-image ${value.image}`}></div>
                    //             </div>
                    //             <div className="content">
                    //                 <div className="inner">
                    //                     <p>{value.category}</p>
                    //                     <h4><a href="/project-blog-details">{value.title}</a></h4>
                    //                     <div className="portfolio-button">
                    //                         <a className="rn-btn" href="/project-blog-details">View Details</a>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //             <Link className="link-overlay" to="/project-blog-details"></Link>
                    //         </div>
                    //     </div>
                    // ))
                    
                    <div className={`${column}`} key="0">
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${PortfolioListContent[0].image}`}></div>
                                <div className={`bg-blr-image ${PortfolioListContent[0].image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{PortfolioListContent[0].category}</p>
                                    <h4><a href="/project-blog-details-wavelength">{PortfolioListContent[0].title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/project-blog-details-wavelength">{t('learnmore')}</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/project-blog-details-wavelength"></Link>
                        </div>
                    </div>
                }

                {
                    <div className={`${column}`} key="1">
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${PortfolioListContent[1].image}`}></div>
                                <div className={`bg-blr-image ${PortfolioListContent[1].image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{PortfolioListContent[1].category}</p>
                                    <h4><a href="/project-blog-details-student">{PortfolioListContent[1].title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/project-blog-details-student">{t('learnmore')}</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/project-blog-details-student"></Link>
                        </div>
                    </div>
                }

                {
                    <div className={`${column}`} key="2">
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${PortfolioListContent[2].image}`}></div>
                                <div className={`bg-blr-image ${PortfolioListContent[2].image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{PortfolioListContent[2].category}</p>
                                    <h4><a href="/project-blog-details-mern">{PortfolioListContent[2].title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/project-blog-details-mern">{t('learnmore')}</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/project-blog-details-mern"></Link>
                        </div>
                    </div>
                }
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;