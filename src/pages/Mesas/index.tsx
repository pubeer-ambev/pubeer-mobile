import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import Constants from "expo-constants";

const MESAS = [
  { id: "1", title: "Corona", quantidade: "8/20" },
  { id: "2", title: "Budweiser", quantidade: "10/20" },
  { id: "3", title: "Brahma", quantidade: "5/20" },
  { id: "4", title: "Skol", quantidade: "18/20" },
  { id: "5", title: "Stella Artois", quantidade: "20/20" },
  { id: "6", title: "H20H", quantidade: "7/20" },
  { id: "7", title: "Colorado", quantidade: "10/20" },
  { id: "8", title: "Original", quantidade: "15/20" },
  { id: "9", title: "Soda", quantidade: "13/20" },
  { id: "10", title: "Guaraná Antarctica", quantidade: "7/20" },
];

const Mesas = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mesas</Text>
        </View>

        <View style={{ height: 20 }}></View>

        <View style={styles.mesasDisponiveis}>
          <TouchableOpacity>
            <Text style={styles.menus}>Mesas disponíveis</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menus}>Minhas mesas</Text>
          </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.containerItems}>
          <FlatList
            data={MESAS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.titleItem}>{item.title}</Text>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.titleQuantidade}>
                      {item.quantidade}
                    </Text>
                    <Image source={require("../../assets/entrarMesa.png")} />
                  </View>
                </View>
              );
            }}
          />
        </SafeAreaView>
        <View style={styles.rodape}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={styles.imageRodape}
              source={require("../../assets/criarMesa.png")}
            />
            <Text style={styles.textosRodape}>Criar Mesa</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={styles.imageRodape}
              source={require("../../assets/convidarMesa.png")}
            />
            <Text style={styles.textosRodape}>Configurações</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 100,
    flexDirection: "column",
  },
  title: {
    alignSelf: "center",
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 40,
  },
  mesasDisponiveis: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menus: {
    fontSize: 17,
  },
  containerItems: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    borderColor: "#8F5236",
    backgroundColor: "#E7D3BC",
    padding: 15,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleItem: {
    fontSize: 16,
  },
  titleQuantidade: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 20
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

export default Mesas;