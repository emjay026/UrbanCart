import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";
import BackButton from "../components/BackButton";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    handleBotResponse(messages[0].text); // Pass the user's message to the bot
  }, []);

  const handleBotResponse = (userMessage) => {
    // Generate a fake response
    let responseIndex = 4; // Default response index

    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      responseIndex = 0;
    } else if (lowerCaseMessage.includes("sale")) {
      responseIndex = 2;
    } else if (lowerCaseMessage.includes("thank")) {
      responseIndex = 3;
    } else if (lowerCaseMessage.includes("bye")) {
      responseIndex = 3;
    } else if (lowerCaseMessage.includes("model")) {
      responseIndex = 5;
    }

    const fakeResponses = [
      "Hello! How can I assist you today?",
      "I'm here to help you with your queries.",
      "Currently, 45% of all products listed in the store are on sale.",
      "Thank you for reaching out!",
      "Sorry I don't have the capability to help you with that. Anything else I can help you with?",
      "I am a large language model (LLM) trained specifically to support Urban Cart. How may I assist you today?",
    ];
    const randomResponse = fakeResponses[responseIndex];

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, {
        _id: Math.random(),
        text: randomResponse,
        createdAt: new Date(),
        user: { _id: 2, name: "Urban Cart Bot" },
      })
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Header with title and cart button */}
        <ScreenHeader
          leftChild={<BackButton />}
          centerChild={<Text style={styles.titleText}>Chat with AI</Text>}
        />
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{ _id: 1 }}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ChatScreen;
