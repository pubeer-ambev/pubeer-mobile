import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "../../../config";

const BOT_USER = {
  _id: 2,
  name: "PubeerBot",
};

interface Params {
  chatName: string;
}

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: `Fala galera`,
      createdAt: new Date(),
      user: BOT_USER,
    },
  ]);

  const [spineer, setSpineer] = useState(false);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      dialogflowConfig.project_id
    );
  }, []);

  const navigation = useNavigation();

  const route = useRoute();

  const routeParams = route.params as Params;

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleGoogleResponse(result: any) {
    console.log(result);
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

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ marginLeft: 10, width: "10%" }}>
            <TouchableOpacity onPress={handleNavigateBack}>
              <AntDesign name="left" size={40} color="#FFFF" />
            </TouchableOpacity>
          </View>

          <View style={{ width: "80%" }}>
            <Text style={styles.title}>{routeParams.chatName}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <GiftedChat
            placeholder={"Fale com a galera"}
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
            }}
          />
          <Send label={"Enviar"} containerStyle={{ backgroundColor: "red" }} />
        </View>
      </View>

      {/* <View style={styles.rodape}>
        <TextInput
          style={styles.inputChat}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/send.png")}
        />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#F2A951",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  spinnerTextStyle: {
    color: '#FFF'
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
  inputChat: {
    borderRadius: 20,
    padding: 10,
    height: 55,
    width: "80%",
    borderColor: "#B5A593",
    borderWidth: 2,
    fontSize: 16,
  },
});

export default Chat;
