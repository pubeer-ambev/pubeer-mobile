import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuUsuario = () => {
  const navigation = useNavigation();

  const handleGetMesas = () => {
    navigation.navigate("Mesas");
  };

  const handleGetQuiz = () => {
    navigation.navigate("Quiz");
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>

      <View style={styles.container}>

        <View style={styles.header}>
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
        </View>

        <View style={styles.tampinhas}>
          <Text style={styles.textos}>5654</Text>
          <Text style={styles.textos}>Tampinhas</Text>
        </View>

        <View style={styles.menus}>
          <View>
            <TouchableHighlight onPress={handleGetMesas}>
              <Image
                style={styles.imageUsuario}
                source={require("../../assets/icon-mesas.png")}
              />
            </TouchableHighlight>
            <Text style={styles.textosMenu}>Mesas</Text>
          </View>
          <View>
            <Image
              style={styles.imageUsuario}
              source={require("../../assets/icon-galera.png")}
            />
            <Text style={styles.textosMenu}>Aquela Galera</Text>
          </View>
          <View>
            <TouchableHighlight onPress={handleGetQuiz}>
              <Image
                style={styles.imageUsuario}
                source={require("../../assets/icon-quiz.png")}
              />
            </TouchableHighlight>
            <Text style={styles.textosMenu}>Quiz</Text>
          </View>
          <View>
            <Image
              style={styles.imageUsuario}
              source={require("../../assets/icon-conquistas.png")}
            />
            <Text style={styles.textosMenu}>Minhas Conquistas</Text>
          </View>
          <View>
            <Image
              style={styles.imageUsuario}
              source={require("../../assets/icon-ze.png")}
            />
            <Text style={styles.textosMenu}>Zé Delivery</Text>
          </View>
        </View>
      </View>

      <View style={styles.rodape}>
        <View style={{ marginBottom: 10 }}>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-configuracao.png")}
          />
          <Text style={styles.textosRodape}>Configurações</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-seguranca.png")}
          />
          <Text style={styles.textosRodape}>Segurança</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-ajuda.png")}
          />
          <Text style={styles.textosRodape}>Ajuda</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#F2A951',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  header: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 80,
    flexDirection: "row",
  },
  imageUsuario: {
    marginLeft: 35,
    marginTop: 20,
  },
  nomeUsuario: {
    textAlign: "left",
    color: "#FFF",
    fontSize: 26,
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
    marginTop: 55,
    backgroundColor: "#8F5236",
    height: 65,
    width: 300,
    borderRadius: 30,
    alignSelf: 'center'
  },
  textos: {
    textTransform: "uppercase",
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
  menus: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: 'center',
    padding: 10,
  },
  textosMenu: {
    color: "#FFF",
    textAlign: "right",
    paddingLeft: 10,
  },
  rodape: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 80,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageRodape: {
    alignSelf: "center",
  },
  textosRodape: {
    fontSize: 15,
  },
});

export default MenuUsuario;
