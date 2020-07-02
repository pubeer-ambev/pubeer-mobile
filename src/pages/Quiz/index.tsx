import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const RESPOSTA_CERTA = 2;
const Quiz = () => {
  const [resposta, setResposta] = useState<Number>(0);

  function handleResposta(id: number) {
    if (id === RESPOSTA_CERTA) {
      setResposta(id);
    } else {
      setResposta(id);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Quiz</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.perguntas}>
            Quais são as três famílias de cervejas?
          </Text>
          <Text 
          style={[
            styles.alternativas, 
            { marginTop: 65 }, 
            resposta != RESPOSTA_CERTA && resposta === 1 ? styles.errado : {}
          ]}
          onPress={() => handleResposta(1)}
          >
            Stout, Abadia e Pilsen
          </Text>
          <Text 
          style={[
            styles.alternativas, 
            resposta == RESPOSTA_CERTA && resposta === 2 ? styles.correto : {}
          ]}
          onPress={() => handleResposta(2)}
          >
            Lager, Ale e Lambic</Text>
          <Text 
          style={[
            styles.alternativas, 
            resposta != RESPOSTA_CERTA && resposta === 3 ? styles.errado : {}
          ]}
          onPress={() => handleResposta(3)}
          >
            Clara, Escuta e Turva</Text>
        </View>
      </View>
      <View style={styles.rodape}>
        <View>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-ajuda-quiz.png")}
          />
          <Text style={styles.textosRodape}>Ajuda</Text>
        </View>
        <View>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/cerveja-pular.png")}
          />
          <Text style={styles.textosRodape}>Segurança</Text>
        </View>
        <View>
          <Image
            style={styles.imageRodape}
            source={require("../../assets/aleatorio.png")}
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
    backgroundColor: "#000",
  },
  header: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 120,
    flexDirection: "column",
  },
  title: {
    alignSelf: "center",
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 50,
  },
  main: {
    padding: 24,
  },
  perguntas: {
    marginTop: 50,
    padding: 40,
    borderRadius: 22,
    backgroundColor: "#E7D3BC",
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
  },
  alternativas: {
    marginTop: 35,
    paddingTop: 20,
    paddingLeft: 75,
    paddingRight: 75,
    paddingBottom: 20,
    borderRadius: 22,
    backgroundColor: "#E7D3BC",
    alignSelf: "center",
    fontSize: 18,
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
    height: 43,
  },
  textosRodape: {
    marginLeft: 55,
    marginTop: 5,
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
  },
  correto: {
    backgroundColor: '#34A853'
  }, 
  errado: {
    backgroundColor: '#EB4335'
  },
});

export default Quiz;
