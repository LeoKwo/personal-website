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
                                                    ES6, React, Bootstrap, Redux.js, Node.js, Figma, LucidChart
                                                </li>
                                                <li>
                                                    <a href="/service">Back-End and Databases <span></span></a>
                                                    Express.js, SprintBoot, Hibernate, MongoDB, MySQL
                                                </li>
                                                <li>
                                                    <a href="/service">Platform & Tool<span></span></a>
                                                    Git, Firebase, Google Cloud Platform, PowerBI, ArcGIS, Adobe CC Suite, Tableau, NumPy, TensorFlow
                                                </li>
                                                <div className="header-btn">
                                                    <a className="rn-btn" href="https://drive.google.com/file/d/1PF-JBs14ESYVeciCWOTRZEUUaBE0cVYt/view?usp=sharing">
                                                        <span>My Resume</span>
                                                    </a>
                                                </div>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">M.S. In Computer Science<span> - Syracuse University, Syracuse, NY</span></a> Jun 2023
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