import React, { useState } from 'react';
import { FaWindowMinimize } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import './chatbot.scss';

const Chatbot = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleChatbot = () => {
        setExpanded(!expanded);
    };
  
    return (
        <div className="chatbot-container">
            <script src="https://kit.fontawesome.com/bbbb8a85b2.js" crossorigin="anonymous"></script>
            {!expanded && 
                <div className="chatbot-button" onClick={toggleChatbot}>
                    <BsChatDotsFill className="chatbot-button-icon"/>
                </div>
            }

            {expanded && 
                <div className="chatbot-content">
                    <div className="chatbot-button" onClick={toggleChatbot}>
                        <FaWindowMinimize className="chatbot-button-icon"/>
                    </div>
                    <iframe
                        title='GuoGenius'
                        src="https://bot.rkguo.xyz/?embed=true"
                        height="550"
                        style={{"width":"350px", "border":"none", "border-radius": "30px"}}
                    ></iframe>
                </div>
            }
        </div>
    );
};
  

export default Chatbot;
