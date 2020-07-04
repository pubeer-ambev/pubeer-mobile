import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "../../../config";

const BOT_USER = {
  _id: 2,
  name: "PubeerBot",
};

const Ajuda = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: `Olá, sou o PubeerBot, assistente virtual do Pubeer. Qual seu nome?`,
      createdAt: new Date(),
      user: BOT_USER,
    },
  ]);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      dialogflowConfig.project_id
    );
  }, []);

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleGoogleResponse(result: any) {
    let text = result.queryResult.fulfillmentText;
    sendBotResponse(text);
  }

  function onSend(newMessages: any) {
    setMessages((prevMessages) => [...newMessages, ...prevMessages]);

    let message = newMessages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => handleGoogleResponse(result),
      (error) => console.log(error)
    );
  }

  function sendBotResponse(text: any) {
    let msg = {
      _id: Math.random(),
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    setMessages((prevMessages) => [msg, ...prevMessages]);
  }

  function renderSend(props: any) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton
            accessibilityStates
            icon="send-circle"
            size={32}
            color="#F2A951"
          />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton
          accessibilityStates
          icon="chevron-double-down"
          size={36}
          color="#F2A951"
        />
      </View>
    );
  }

  function renderBubble(props: any) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#d19173",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={handleNavigateBack}>
              <AntDesign name="left" size={40} color="#FFFF" />
            </TouchableOpacity>
          </View>

          <View style={{ width: "80%" }}>
            <Text style={styles.title}>Ajuda</Text>
          </View>

          <View style={{ width: "10%" }}>
            <Image
              style={styles.more}
              source={require("../../assets/more.png")}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <GiftedChat
            placeholder={"Nos conte seu problema"}
            alwaysShowSend={true}
            showUserAvatar
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
              name: "User Test",
            }}
            renderSend={renderSend}
            scrollToBottomComponent={scrollToBottomComponent}
            renderLoading={renderLoading}
            renderBubble={renderBubble}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#F2A951",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6EDE3",
  },
  header: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  more: {
    width: 40,
    height: 40,
  },
  title: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerChat: {
    backgroundColor: "#F6EDE3",
    width: "100%",
  },
  chat: {
    height: "60%",
    borderColor: "#B5A593",
    borderWidth: 2,
  },
  rodape: {
    backgroundColor: "#F6EDE3",
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Ajuda;
