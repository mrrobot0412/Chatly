import { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
  const [chats, setChats] = useState([]); 

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/chat");
        setChats(data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div>
      {chats && chats.map((a, index) => (
        <div key={index}>{a.chatName}</div>  
      ))}
    </div>
  );
};

export default Chatpage;
