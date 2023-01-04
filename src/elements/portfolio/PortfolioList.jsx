import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-wavelength',
        category: 'Kotlin + Spring Boot + MongoDB + Digital Ocean + Firebase Authentication',
        title: 'Wavelength'
    },
    {
        image: 'image-student-management-sys',
        category: 'Thymeleaf + Spring Boot + MySQL + Docker',
        title: 'Online Student Management System'
    },
    {
        image: 'image-exercise-track',
        category: 'MongoDB + Express.js + React + Node.js',
        title: 'Exercise Tracker Web App'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
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
                                        <a className="rn-btn" href="/project-blog-details-wavelength">View Details</a>
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
                                        <a className="rn-btn" href="/project-blog-details-student">View Details</a>
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
                                        <a className="rn-btn" href="/project-blog-details-mern">View Details</a>
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