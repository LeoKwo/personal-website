import React, { useState } from 'react';
import { FaComment, FaTimes, FaWindowMinimize } from "react-icons/fa";
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
                    <FaComment className="chatbot-button-icon"/>
                </div>
            }

            {expanded && 
                <div className="chatbot-content">
                    <div className="chatbot-button" onClick={toggleChatbot}>
                        <FaWindowMinimize className="chatbot-button-icon"/>
                    </div>
                    <iframe
                        title='GuoGenius'
                        src="https://guogenius-e9cbdf445f45.herokuapp.com/?embed=true"
                        height="550"
                        style={{"width":"350px", "border":"none"}}
                    ></iframe>
                </div>
            }
        </div>
    );
};
  

export default Chatbot;
