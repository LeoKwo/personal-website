import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { AiOutlineAndroid, AiFillCloseCircle } from "react-icons/ai";
import { FaReact, FaAndroid, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiRedux, SiSpring, SiMongodb } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";
import Modal from 'react-modal';



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

const techStack = (
    <div>
        abc
    </div>
)

const itemClicked = (i) => {
    // console.log(techStack);
}


class ServiceThree extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            {/* <a href={"/service-details-" + i}> */}
                            {/* <a href={"#stack"}> */}
                            <button href={"#stack"} onClick={this.openModal}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                    <Modal className="tech-stack-modal" isOpen={this.state.isOpen} onClose={() => this.setState({isOpen: false})}>
                        <div className="modal-wrapper">
                            <h2>My Tech Stack</h2>
                            <p>Last updated on Aug 18th, 2022</p>
                            <div className="tech-wrapper">
                                <h3>Front-end technology</h3>
                                <h4>Languages</h4>
                                <ul className="tech-list">
                                    <li>HTML</li>
                                    <li>CSS/Sass/Less</li>
                                    <li>ES6 JavaScript</li>
                                </ul>
                                <h4>Frameworks and packages</h4>
                                <ul className="tech-list">
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Bootstrap</li>
                                    <li>Ant Design</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                            <div className="tech-wrapper">
                                <h3>Back-end and database</h3>
                                <h4>Languages</h4>
                                <ul className="tech-list">
                                    <li>Java</li>
                                    <li>SQL</li>
                                </ul>
                                <h4>Frameworks and packages</h4>
                                <ul className="tech-list">
                                    <li>SpringBoot</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                    <li>Docker</li>
                                </ul>
                            </div>
                            <div className="tech-wrapper">
                                <h3>Android Development</h3>
                                <h4>Languages</h4>
                                <ul className="tech-list">
                                    <li>Kotlin</li>
                                </ul>
                            </div>
                        
                        <AiFillCloseCircle onClick={() => this.setState({isOpen: false})} />
                        </div>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
