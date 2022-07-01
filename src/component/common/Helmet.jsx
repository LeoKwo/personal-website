import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} </title>
                    <meta name="description" content="Ruikang Guo's personal hub on the internet" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
