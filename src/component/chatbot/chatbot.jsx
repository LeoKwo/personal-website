import React, { useState } from 'react';
import { FaComment, FaTimes } from "react-icons/fa";
import axios from 'axios';
import './chatbot.scss';

// Inside Chatbot component

const Chatbot = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);
  
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
  
        setIsLoading(true); // Set loading state to true when the request starts
  
        try {
            const response = 
                await axios.get(`https://rkguo-chatbot-ed2fcc8a0e01.herokuapp.com/api/v1/chatbot/${inputValue}`);
            // console.log(response)
            const botReply = response.data.response;
        
            setMessages([...messages, { text: inputValue, sender: 'user' }, { text: botReply, sender: 'bot' }]);
            setInputValue('');
        } catch (error) {
            console.error('Error fetching chatbot response:', error);
        } finally {
            setIsLoading(false); // Set loading state to false after the request completes
      }
    };

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
                        <FaTimes className="chatbot-button-icon"/>
                        
                    </div>
                    
                    <div className="chatbot-messages">
                        <div className="message bot">I am a Chatbot powered by GPT 3. To learn more, visit my <a className="chatbot-repo-link" href='https://github.com/LeoKwo/chatbot_rkguo'>repo</a>.</div>
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form className="chatbot-form" onSubmit={handleSubmit}>
                        <input className="chatbot-form-input" type="text" value={inputValue} onChange={handleChange} placeholder='Ask me about Ruikang Guo' />
                        
                        <button className="chatbot-form-button rn-button-style--2 btn-solid" type="submit">Ask Chatbot</button>
                        
                    </form>
                    
                    {isLoading && <div className="loading-indicator">Thinking...  <i className="fa-solid fa-face-smile-wink fa-beat-fade fa-lg" style={{color: "#ffffff"}}></i></div>}
                </div>
            }
        </div>
    );
};
  

export default Chatbot;
