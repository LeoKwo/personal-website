import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { AiOutlineAndroid, AiFillCloseCircle } from "react-icons/ai";
import { FaReact, FaAndroid, FaNodeJs, FaDocker, FaBrain } from "react-icons/fa";
import { SiRedux, SiSpring, SiMongodb } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";
import { RiBrainLine } from "react-icons/ri";
import Modal from 'react-modal';
import { LanguageContext } from "../../translation/languageContext";

class ServiceThree extends Component{
    static contextType = LanguageContext;

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
        const { t } = this.context;
        const ServiceList = [
            {
                icon: <FaReact />,
                title: t('frontend'),
                description: t('frontenddesc')
            },
            {
                icon: <SiSpring />,
                title: t('backend'),
                description: t('backenddesc')
            },
            {
                icon: <GrAndroid />,
                title: t('mobile'),
                description: t('mobiledesc')
            },
            {
                icon: <FaBrain />,
                title: t('genai'),
                description: t('genaidesc')
            }
        ]
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
                            <h2>{t('stacks')}</h2>
                            <p>{t('updatedtime')}</p>
                            <div className="tech-wrap-around">
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><FaReact />&nbsp;&nbsp;{t('frontend')}</h3>
                                    <h4>{t('frameworkandpackages')}</h4>
                                    <ul className="tech-list">
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Bootstrap</li>
                                        <li>Ant Design</li>
                                    </ul>
                                </div>
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><SiSpring />&nbsp;&nbsp;{t('backend')}</h3>
                                    <h4>{t('language')}</h4>
                                    <ul className="tech-list">
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>SQL</li>
                                    </ul>
                                    <h4>{t('frameworkandpackages')}</h4>
                                    <ul className="tech-list">
                                        <li>Spring Boot</li>
                                        <li>FastAPI</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>Docker</li>
                                    </ul>
                                    <h4>{t('cloud')}</h4>
                                    <ul className="tech-list">
                                        <li>AWS Lambda</li>
                                        <li>AWS LightSail</li>
                                        <li>Heroku</li>
                                        <li>Netlify</li>
                                        <li>Azure</li>
                                        <li>Alibaba Cloud</li>
                                        <li>MongoDB Atlas</li>
                                        <li>Firebase</li>
                                        <li>Digital Ocean</li>
                                    </ul>
                                </div>
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><GrAndroid />&nbsp;&nbsp;{t('mobile')}</h3>
                                    <h4>{t('language')}</h4>
                                    <ul className="tech-list">
                                        <li>Kotlin</li>
                                        <li>React Native</li>
                                    </ul>
                                    <h4>{t('frameworkandpackages')}</h4>
                                    <ul className="tech-list">
                                        <li>Retrofit</li>
                                    </ul>
                                </div>
                                <div className="tech-wrapper">
                                    <h3 style={{"display": "flex"}}><FaBrain />&nbsp;&nbsp;{t('genai')}</h3>
                                    <h4>{t('frameworkandpackages')}</h4>
                                    <ul className="tech-list">
                                        <li>LangChain</li>
                                        <li>LlamaIndex</li>
                                        <li>Streamlit</li>
                                        <li>Azure / AWS</li>
                                    </ul>
                                </div>
                            </div>
                        
                        <AiFillCloseCircle 
                            style={{
                                position: 'fixed',
                                bottom: '40px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                            onClick={() => this.setState({isOpen: false})} />
                        </div>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
