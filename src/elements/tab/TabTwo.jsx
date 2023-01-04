import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Education & Certification",
        tab3 = "Experiences";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Programming Languages <span></span></a>
                                                    Java, C++, Kotlin, Python, SQL, R
                                                </li>
                                                <li>
                                                    <a href="/service">Front-End Technology <span></span></a>
                                                    ES6 JS, React, Bootstrap, Redux.js, Node.js, Retrofit, Glide
                                                </li>
                                                <li>
                                                    <a href="/service">Back-End and Databases <span></span></a>
                                                    Express.js, Spring Boot, Hibernate, MongoDB, MySQL
                                                </li>
                                                <li>
                                                    <a href="/service">Platform & Tool<span></span></a>
                                                    Git, Maven, Gradle, Docker, Firebase, Heroku, Digital Ocean, Figma, Tableau
                                                </li>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                                            <a className="rn-button-style--2 btn-solid" href="https://drive.google.com/file/d/1L0yE5tx_uMOYAn73LkfZwU4cYhTHknz2/view?usp=sharing">
                                                                <span>Get my Resume</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">M.S. In Computer Science<span> - Syracuse University, Syracuse, NY</span></a> May 2023
                                               </li>
                                               <li>
                                                   <a href="/service">B.A. Geography: Data Science w/ Minor In Informatics<span> - University of Washington, Seattle, WA</span></a> Jun 2021
                                               </li>
                                               <li>
                                                   <a href="/service">Database Management Certificate<span> - University of Washington, Seattle, WA</span></a> Aug 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Full Stack Developer Internship<span> - Soca Networks</span></a> May 2022 - Sep 2022
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;