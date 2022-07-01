import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Education & Certification",
        tab3 = "Experience";
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
                                                    <a href="/service">Platform & Tool<span></span></a>
                                                    Git, PowerBI, ArcGIS, Adobe CC Suite, Tableau, Firebase, Google Cloud Platform, NumPy, TensorFlow
                                                </li>
                                                <li>
                                                    <a href="/service">Web Technology <span></span></a>
                                                    HTML, CSS, JavaScript, Figma, LucidChart, React, Bootstrap, Node.js, Redux.js, MongoDB
                                                </li>
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