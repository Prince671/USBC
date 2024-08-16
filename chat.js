import React, { useEffect, useState } from 'react';

const Chat = ({ roomName }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const socket = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    };

    return () => {
      socket.close();
    };
  }, [roomName]);

  const sendMessage = () => {
    socket.send(JSON.stringify({ message }));
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
