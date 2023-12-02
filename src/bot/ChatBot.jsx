import React, { useEffect, useState } from 'react';
import '../chatBot.css';
import chat from '../chatbox-icon.svg';
// import { Send } from '@mui/icons-material';
import { useSpring , animated} from '@react-spring/web';
import Lottie from 'lottie-react';

const Chatbot = () => {
  const [chatboxVisible, setChatboxVisible] = useState(false);
  const [isTyping, setisTyping] = useState(false);
  const toggleChatbox = () => {
    setChatboxVisible(!chatboxVisible);
  };

  useEffect(() => {
    const chatbox = new Chatbox();
    chatbox.display();
  }, []);

  const getGreeting=()=> {
    const now = new Date();
    const hour = now.getHours();
  
    if (hour >= 5 && hour < 18) {
      return "Bonjour!";
    } else {
      return "Bonsoir!";
    }
  }
  const springProps = useSpring({
    opacity: chatboxVisible ? 1 : 0,
    transform: chatboxVisible ? 'translateY(-10)' : 'translateY(-30px)',
    config: { tension: 200, friction: 10 },    
  });
  
  class Chatbox {
    constructor() {
      this.args = {
        openButton: document.querySelector('.chatbox__button'),
        chatBox: document.querySelector('.chatbox__support'),
        sendButton: document.querySelector('.send__button'),
      };
  
      this.state = false;
      this.messages = [];
    }
  
    display() {
      const { openButton, chatBox, sendButton } = this.args;
  
      openButton.addEventListener('click', () => this.toggleState(chatBox));
  
      sendButton.addEventListener('click', () => this.onSendButton(chatBox));
  
      const node = chatBox.querySelector('input');
      node.addEventListener('keyup', ({ key }) => {
        if (key === 'Enter') {
          this.onSendButton(chatBox);
        }
      });
    }
  
    toggleState(chatbox) {
      this.state = !this.state;
  
      // show or hides the box
      if (this.state) {
        chatbox.classList.add('chatbox--active');
      } else {
        chatbox.classList.remove('chatbox--active');
      }
    }
    
    
    
    onSendButton(chatbox) {
      setisTyping(true);
      const textField = chatbox.querySelector('input');
      const text1 = textField.value;
      if (text1 === '') {
        return;
      }else{
        textField.value = '';
      }
    
      const msg1 = { name: 'Vous', message: text1 };
      this.messages.push(msg1);
    
      // Ajoutez le message immédiatement au fil de disscussion
      this.updateChatText(chatbox);
    
      fetch('https://chat.quant-ium.online/api/question', {
        method: 'POST',
        body: JSON.stringify({ message: text1 }),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((r) => {
          setisTyping(false);
          const msg2 = { name: 'Nancy', message: r.completionText };
          this.messages.push(msg2);
          this.updateChatText(chatbox);
        })
        .catch((error) => {
          setisTyping(false);
          console.error('Error:', error);
          this.updateChatText(chatbox);
          textField.value = '';
        });
    }
    
    updateChatText(chatbox) {
      var html = '';
      this.messages.slice().reverse().forEach(function (item, index) {
        if (item.name === 'Nancy') {
          html +=
            '<div class="messages__item messages__item--visitor">' +
            item.message +
            '</div>';
        } else {
          html +=
            '<div class="messages__item messages__item--operator">' +
            item.message +
            '</div>';
        }
      });
  
      const chatmessage = chatbox.querySelector('.chatbox__messages');
      chatmessage.innerHTML = html;
    }
  }
  
  return (
    <div className="container" >
      <meta name="description" content="Obtenez de l'aide instantanée avec notre chatbot de support en ligne. Posez vos questions et obtenez des réponses rapides. Essayez notre chatbot dès maintenant!" />
      <div className="chatbox">
        <animated.div className="chatbox__support" style={springProps}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat Bot</h4>
              <p className="chatbox__description--header">{getGreeting()} Je suis Nancy, En quoi puis-je vous aider?</p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div></div>
          </div>
          <div className='chatbox__typing'>
           {/* <ProgressBar height={50} width={50} visible={isTyping} /> */}
           {isTyping &&  <Lottie animationData={require('../typing.json')} style={{ width: 100, height: 100 , transform: 'scaleY(-1)'}} loop={true} />}
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Entrez votre message..." />
            <button className="chatbox__send--footer send__button">Envoyer</button>
          </div>
        </animated.div>
        <div className="chatbox__button">
          <button onClick={toggleChatbox}><img src={chat} alt="Chatbox Icon" /></button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
