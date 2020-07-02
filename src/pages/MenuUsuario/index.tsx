import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuUsuario = () => {
  const navigation = useNavigation();

  const handleGetMesas = () => {
    navigation.navigate("Mesas");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.fundo}>
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
              <Image
                style={styles.imageUsuario}
                source={require("../../assets/icon-quiz.png")}
              />
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
      </View>
      <View style={styles.rodape}>
        <View>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-configuracao.png")}
          />
          <Text style={styles.textosRodape}>Configurações</Text>
        </View>
        <View>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-seguranca.png")}
          />
          <Text style={styles.textosRodape}>Segurança</Text>
        </View>
        <View>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-ajuda.png")}
          />
          <Text style={styles.textosRodape}>Ajuda</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#000",
  },
  main: {
    flex: 1,
    alignItems: "center",
  },
  fundo: {
    backgroundColor: "#F2A951",
    width: 400,
    height: 120,
    flexDirection: "row",
  },
  imageUsuario: {
    marginLeft: 35,
    marginTop: 20,
  },
  nomeUsuario: {
    textAlign: "left",
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 20,
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
  },
  textos: {
    textTransform: "uppercase",
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
  },
  menus: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    marginTop: 80,
    padding: 6,
  },
  textosMenu: {
    color: "#FFF",
    textAlign: "right",
    paddingLeft: 10,
  },
  rodape: {
    backgroundColor: "#F2A951",
    width: 500,
    height: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 15,
  },
  imageRodape: {
    marginLeft: 60,
    alignSelf: "center",
    height: 47,
  },
  textosRodape: {
    marginLeft: 55,
    marginTop: 5,
    flex: 1,
    alignSelf: "center",
  },
});

export default MenuUsuario;
