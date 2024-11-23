import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LanguageContext } from "../../translation/languageContext";

class TabsTwo extends Component{
    static contextType = LanguageContext;

    render(){
        const { t } = this.context;
        
        let 
            tab1 = t('professionalexperience'),
            tab2 = t('education');
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
                                                   <div style={{fontWeight:'bold'}}>{t('career1')}</div>{t('career1time')}
                                                   <div style={{fontWeight:'bold'}}>{t('career2')}</div>{t('career2time')}
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <div><div style={{fontWeight:'bold'}}>{t('edu1')}</div>{t('edu1location')}</div>{t('edu1time')}
                                               </li>
                                               <li>
                                                   <div><div style={{fontWeight:'bold'}}>{t('edu2')}</div>{t('edu2location')}</div>
                                                   {t('edu2time')}
                                               </li>
                                               <li>
                                                   <div><div style={{fontWeight:'bold'}}>{t('edu3')}</div>{t('edu2location')}</div>{t('edu3time')}
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