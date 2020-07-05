import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { droidSafeArea } from "../../styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MenuUsuario = () => {
  const navigation = useNavigation();

  const handleGetMesas = () => {
    navigation.navigate("Mesas");
  };

  const handleGetQuiz = () => {
    navigation.navigate("Quiz");
  };

  const handleAjuda = () => {
    navigation.navigate("Ajuda");
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <Header>
          <View>
            <Image
              style={styles.imageUsuario}
              source={require("../../assets/icon-usuario.png")}
            />
          </View>
          <View>
            <Text style={styles.nomeUsuario}>Olá, Maria</Text>
            <Text style={styles.tituloUsuario}>Mestre Cervejeiro</Text>
          </View>
        </Header>

        <View style={styles.tampinhas}>
          <Text style={styles.textos}>5654</Text>
          <Text style={styles.textos}>Tampinhas</Text>
        </View>

        <View style={styles.menus}>
          <View>
            <View style={styles.containerImage}>
              <TouchableOpacity onPress={handleGetMesas}>
                <Image
                  style={styles.imageMenus}
                  source={require("../../assets/pub.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.textosMenu}>Mesas</Text>
          </View>

          <View>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageMenus}
                source={require("../../assets/galera.png")}
              />
            </View>
            <Text style={styles.textosMenu}>Aquela Galera</Text>
          </View>

          <View>
            <View style={styles.containerImage}>
              <TouchableOpacity onPress={handleGetQuiz}>
                <Image
                  style={styles.imageMenus}
                  source={require("../../assets/quiz.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.textosMenu}>Quiz</Text>
          </View>

          <View>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageMenus}
                source={require("../../assets/podium.png")}
              />
            </View>

            <Text style={styles.textosMenu}>Conquistas</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Image
            style={styles.imageZe}
            source={require("../../assets/ze.png")}
          />
          <Text style={[styles.textosMenu, { alignSelf: "center" }]}>
            Bebida gelada?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Zé Delivery</Text>
          </Text>
        </View>
      </View>

      <Footer>
        <View style={{ marginBottom: 10 }}>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/settings.png")}
          />
          <Text style={styles.textosRodape}>Configurações</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/shield.png")}
          />
          <Text style={styles.textosRodape}>Segurança</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity onPress={handleAjuda}>
            <Image
              style={styles.imageRodape}
              source={require("../../assets/help.png")}
            />
          </TouchableOpacity>
          <Text style={styles.textosRodape}>Ajuda</Text>
        </View>
      </Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea,
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageUsuario: {
    marginLeft: 35,
    marginTop: 20,
  },
  nomeUsuario: {
    textAlign: "left",
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  tituloUsuario: {
    textAlign: "left",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
  },
  tampinhas: {
    marginTop: 45,
    backgroundColor: "#8F5236",
    height: 65,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
  },
  textos: {
    textTransform: "uppercase",
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
  menus: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerImage: {
    padding: 15,
    borderColor: "#8F5236",
    borderWidth: 1,
    margin: 24,
    width: 90,
    height: 80,
    borderRadius: 20,
  },
  imageMenus: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  textosMenu: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
  },
  imageZe: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  imageRodape: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  textosRodape: {
    fontSize: 15,
  },
});

export default MenuUsuario;
