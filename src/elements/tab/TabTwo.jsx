import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Skills",
        tab2 = "Education",
        tab3 = "Professional Experiences";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                    <a className="rn-button-style--2 btn-solid" href="https://drive.google.com/file/d/17wL6uq284y825XaQH5IY1P9HGzZLaF6t/view?usp=sharing">
                                        <span>Get my Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
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
                                                    Java, Kotlin, Python, SQL, C++, R
                                                </li>
                                                <li>
                                                    <a href="/service">Front-End Technology <span></span></a>
                                                    ES6 JS, React, React Native, Redux.js, Kotlin
                                                </li>
                                                <li>
                                                    <a href="/service">Back-End and Databases <span></span></a>
                                                    Spring Boot, FastAPI, Express.js, Hibernate, MongoDB, MySQL
                                                </li>
                                                <li>
                                                    <a href="/service">Platform & Tools<span></span></a>
                                                    AWS Lambda, AWS LightSail, Azure, Git, Maven, Gradle, Docker, Firebase, Heroku, Digital Ocean, Figma, Tableau
                                                </li>
                                                {/* <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                                            <a className="rn-button-style--2 btn-solid" href="https://drive.google.com/file/d/17wL6uq284y825XaQH5IY1P9HGzZLaF6t/view?usp=sharing">
                                                                <span>Get my Resume</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <div><div style={{fontWeight:'bold'}}>M.S. In Computer Science</div>Syracuse University, Syracuse, NY</div> May 2023
                                               </li>
                                               <li>
                                                   <div><div style={{fontWeight:'bold'}}>B.A. Geography: Data Science with Minor In Informatics</div>University of Washington, Seattle, WA</div> Jun 2021
                                               </li>
                                               <li>
                                                   <div><div style={{fontWeight:'bold'}}>Database Management Certificate</div>University of Washington, Seattle, WA</div> Aug 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <div style={{fontWeight:'bold'}}>Software Engineer - Day & Nite All Service</div> July 2023 - Present
                                                   <div style={{fontWeight:'bold'}}>Full Stack Developer Internship - Soca Networks</div> May 2022 - Sep 2022
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                    <a className="rn-button-style--2 btn-solid" href="https://drive.google.com/file/d/17wL6uq284y825XaQH5IY1P9HGzZLaF6t/view?usp=sharing">
                                        <span>Get my Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    
                </div>
                
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;