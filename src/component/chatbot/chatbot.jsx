import React, { useState } from 'react';
import { FaWindowMinimize, FaChevronUp } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import './chatbot.scss';
import axios from 'axios';
import { useLanguage } from "../../translation/languageContext";

const Chatbot = () => {
    const { language, setLanguage, t } = useLanguage();
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
            const url = "https://chattongyi-sawjcqgrkc.cn-hongkong.fcapp.run";
            const payload = {
                msg: inputValue,
                thread_id: 1,
            };

            console.log(inputValue)

            // Axios POST request
            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log(response)
            const botReply = response.data;
        
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
                    <BsChatDotsFill className="chatbot-button-icon"/>
                </div>
            }

            {expanded && 
                <div className="chatbot-content">
                    <div className="chatbot-button" onClick={toggleChatbot}>
                        <FaWindowMinimize className="chatbot-button-icon"/>
                    </div>
                    
                    <div className="chatbot-messages">
                        <span className="sender">{t('rkguo')}</span>
                        <div className="message bot">{t('chatbotgreeting')}</div>
                        {messages.map((message, index) => (
                            <>
                                {
                                    message.sender === 'user' ? 
                                    <span className="sender human">{t('chatbotuser')}</span> :
                                    <span className="sender">{t('rkguo')}</span>
                                }
                                <div key={index} className={`message ${message.sender}`}>
                                    {message.text}
                                </div>
                            </>
                        ))}
                    </div>
                    <form className="chatbot-form" onSubmit={handleSubmit}>
                        <input className="chatbot-form-input" type="text" value={inputValue} onChange={handleChange} placeholder={t('chatbotprompt')} />
                        <button className="chatbot-form-button rn-button-style--2 btn-solid" type="submit">{<FaChevronUp/>}</button>
                    </form>
                    {isLoading && <div className="loading-indicator">{t('chatbotspinner')}</div>}

                </div>
            }
        </div>
    );
};
  

export default Chatbot;
