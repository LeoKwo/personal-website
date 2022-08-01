import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { AiOutlineAndroid } from "react-icons/ai";
import { FaReact, FaAndroid, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiRedux, SiSpring, SiMongodb } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";

const ServiceList = [
    
    {
        icon: <FaReact />,
        title: 'Front-End Development',
        description: 'I mostly use React for front-end development. JSX is my primary template language. I am also familiar with Bootstrap, Ant Design, and Less CSS.'
    },
    {
        icon: <SiSpring />,
        title: 'Back-End Development',
        description: 'Java is my primary programming language. For backend, my technology stack includes SpringBoot, Hibernate, and Rest APIs.'
    },
    {
        icon: <GrAndroid />,
        title: 'Android App Development',
        description: 'I really enjoyed my past experience building an Android App. Kotlin was my language of choice.'
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
                            {/* <a href={"/service-details-" + i}> */}
                            <a href={"#stack"}>
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
