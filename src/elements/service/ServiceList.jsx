import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { AiOutlineAndroid, AiFillCloseCircle } from "react-icons/ai";
import { FaReact, FaAndroid, FaNodeJs, FaDocker, FaBrain } from "react-icons/fa";
import { SiRedux, SiSpring, SiMongodb } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";
import { RiBrainLine } from "react-icons/ri";
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
        description: 'Java and Python are my primary programming languages. For backend, my technology stack includes SpringBoot and FastAPI. I have also deployed multiple projects using AWS Lambda, AWS LightSail, Heroku and Docker.'
    },
    {
        icon: <GrAndroid />,
        title: 'Android Development',
        description: 'I really enjoyed my past experience building an Android App. Kotlin was my language of choice.'
    },
    {
        icon: <FaBrain />,
        title: 'GenAI',
        description: 'AI is bound to change the world as we know it. As a futurist, I am thrilled to work on some exciting projects using the latest technologies.'
    }
]

// const techStack = (
//     <div>
//         abc
//     </div>
// )

// const itemClicked = (i) => {
//     // console.log(techStack);
// }


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
                            <h2>Tech Stacks</h2>
                            <p>Updated: Dec 16th, 2023</p>
                            <div className="tech-wrap-around">
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><FaReact />&nbsp;&nbsp;Front-end technology</h3>
                                    <h4>Frameworks and packages</h4>
                                    <ul className="tech-list">
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Bootstrap</li>
                                        <li>Ant Design</li>
                                    </ul>
                                </div>
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><SiSpring />&nbsp;&nbsp;Back-end and database</h3>
                                    <h4>Languages</h4>
                                    <ul className="tech-list">
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>SQL</li>
                                    </ul>
                                    <h4>Frameworks and packages</h4>
                                    <ul className="tech-list">
                                        <li>Spring Boot</li>
                                        <li>FastAPI</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>Docker</li>
                                    </ul>
                                    <h4>Cloud Platforms</h4>
                                    <ul className="tech-list">
                                        <li>AWS Lambda</li>
                                        <li>AWS LightSail</li>
                                        <li>Heroku</li>
                                        <li>Netlify</li>
                                        <li>Azure</li>
                                        <li>MongoDB Atlas</li>
                                        <li>Firebase</li>
                                        <li>Digital Ocean</li>
                                    </ul>
                                </div>
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><GrAndroid />&nbsp;&nbsp;Android Development</h3>
                                    <h4>Languages</h4>
                                    <ul className="tech-list">
                                        <li>Kotlin</li>
                                        <li>React Native</li>
                                    </ul>
                                    <h4>Frameworks and packages</h4>
                                    <ul className="tech-list">
                                        <li>Retrofit</li>
                                    </ul>
                                </div>
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><FaBrain />&nbsp;&nbsp;GenAI Development</h3>
                                    <h4>Frameworks and Platforms</h4>
                                    <ul className="tech-list">
                                        <li>LangChain</li>
                                        <li>LlamaIndex</li>
                                        <li>Streamlit</li>
                                        <li>Azure / AWS</li>
                                    </ul>
                                </div>
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
