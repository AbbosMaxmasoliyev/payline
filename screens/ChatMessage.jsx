import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import {io} from 'socket.io-client';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io('https://bear-payline-server-87da0985e77c.herokuapp.com/chat'); // Server manzili va porti
    console.log(socket);
   
    socket.on('newMessage-' + "52133195", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(messages);
    });

    socket.on('messageHistory', (messageHistory) => {
      setMessages(messageHistory);
      console.log(messages);
    });

    socket.on('newMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View>
      <Text>Message History</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ChatApp;