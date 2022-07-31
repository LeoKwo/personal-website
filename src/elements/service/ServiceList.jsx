import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { AiOutlineAndroid } from "react-icons/ai";
import { FaReact, FaAndroid, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiRedux, SiSpring, SiMongodb } from "react-icons/si";

const ServiceList = [
    
    {
        icon: <FaReact />,
        title: 'Front-End Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <SiSpring />,
        title: 'Back-End Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FaAndroid />,
        title: 'Android App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={"/service-details-" + i}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
