import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
            tab1 = "Professional Experiences",
            tab2 = "Education";
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
                                        {/* <Tab>{tab3}</Tab> */}
                                    </TabList>
                                    

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