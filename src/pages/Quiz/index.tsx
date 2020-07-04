import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const RESPOSTA_CERTA = 2;

const ARR_PERGUNTAS: string[] = [
  "",
  "Quais são as três famílias de cervejas?",
  "Quando a AMBEV foi fundada?",
];

const ARR_ALTERNATIVAS1: any = [
  { a: "Stout, Abadia e Pilsen" },
  { b: "Lager, Ale e Lambic" },
  { c: "Clara, Escura e Turva" },
];

const ARR_ALTERNATIVAS2: any = [{ a: "1998" }, { b: "1999" }, { c: "2000" }];

const Quiz = () => {
  const [resposta, setResposta] = useState<number>(0);
  const [ocultar1, setOcultar1] = useState<boolean>(false);
  const [ocultar2, setOcultar2] = useState<boolean>(false);
  const [ocultar3, setOcultar3] = useState<boolean>(false);
  const [alternativa1, setAlternativa1] = useState<boolean>(false);
  const [alternativa2, setAlternativa2] = useState<boolean>(false);
  const [alternativa3, setAlternativa3] = useState<boolean>(false);
  const [pergunta, setPergunta] = useState<number>(0);
  const [indexAtual, setIndexAtual] = useState<number>();

  const navigation = useNavigation();

  useEffect(() => {
    handlePerguntasRespostas();
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handlePerguntasRespostas() {
    let index: any = Number(Math.random() * (3 - 1) + 1);
    index = parseInt(index);
    index === 1 && indexAtual === 1 ? (index = 2) : (index = 1);
    setIndexAtual(index);
    setOcultar1(false);
    setOcultar2(false);
    setOcultar3(false);

    const perguntaEscolhida: any = ARR_PERGUNTAS[index];
    setPergunta(perguntaEscolhida);
    if (index === 1) {
      setAlternativa1(ARR_ALTERNATIVAS1[0].a);
      setAlternativa2(ARR_ALTERNATIVAS1[1].b);
      setAlternativa3(ARR_ALTERNATIVAS1[2].c);
    } else {
      setAlternativa1(ARR_ALTERNATIVAS2[0].a);
      setAlternativa2(ARR_ALTERNATIVAS2[1].b);
      setAlternativa3(ARR_ALTERNATIVAS2[2].c);
    }
  }

  function handleRespostaAleatoria() {
    const resposta: any = Number(Math.random() * (4 - 1) + 1);
    handleResposta(parseInt(resposta));
  }

  function handleRespostaAjuda() {
    let id: any = Number(Math.random() * (4 - 1) + 1);
    if (ocultar1 === true || ocultar2 === true || ocultar3 === true) {
      return;
    }
    switch (parseInt(id)) {
      case 1:
        setOcultar1(true);
        break;
      case 2:
        setOcultar1(true);
        break;
      case 3:
        setOcultar3(true);
        break;
      default:
        break;
    }
  }

  function handleResposta(id: number) {
    setResposta(id);
    setTimeout(() => {
      setResposta(0);
      handlePerguntasRespostas();
    }, 1000);
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
            <Text style={styles.title}>Quiz</Text>
          </View>
        </View>

        <View style={styles.main}>
          <View>
            <Text style={styles.perguntas}>{pergunta}</Text>
          </View>

          <View style={[styles.containerAlternativas, { marginTop: 50 }]}>
            <Text
              style={[
                styles.alternativas,
                resposta != RESPOSTA_CERTA && resposta === 1
                  ? styles.errado
                  : {},
                ocultar1 ? styles.ocultar : {},
              ]}
              onPress={() => handleResposta(1)}
            >
              {alternativa1}
            </Text>
          </View>
          <View style={styles.containerAlternativas}>
            <Text
              style={[
                styles.alternativas,
                resposta == RESPOSTA_CERTA && resposta === 2
                  ? styles.correto
                  : {},
                ocultar2 ? styles.ocultar : {},
              ]}
              onPress={() => handleResposta(2)}
            >
              {alternativa2}
            </Text>
          </View>
          <View style={styles.containerAlternativas}>
            <Text
              style={[
                styles.alternativas,
                resposta != RESPOSTA_CERTA && resposta === 3
                  ? styles.errado
                  : {},
                ocultar3 ? styles.ocultar : {},
              ]}
              onPress={() => handleResposta(3)}
            >
              {alternativa3}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.rodape}>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity onPress={handleRespostaAjuda}>
            <Image
              style={[styles.imageRodape]}
              source={require("../../assets/help.png")}
            />
          </TouchableOpacity>
          <Text style={[styles.textosRodape, ocultar1 ? styles.ocultar : {}]}>
            Ajuda
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity onPress={handlePerguntasRespostas}>
            <Image
              style={[styles.imageRodape, ocultar2 ? styles.ocultar : {}]}
              source={require("../../assets/cerveja-pular.png")}
            />
          </TouchableOpacity>
          <Text style={[styles.textosRodape]}>Pular</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity onPress={handleRespostaAleatoria}>
            <Image
              style={[styles.imageRodape]}
              source={require("../../assets/random.png")}
            />
          </TouchableOpacity>
          <Text style={[styles.textosRodape]}>Aleatório</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#000",
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
  main: {
    padding: 24,
  },
  perguntas: {
    padding: 18,
    borderRadius: 22,
    backgroundColor: "#E7D3BC",
    textAlign: "center",
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "bold",
  },
  containerAlternativas: {
    justifyContent: "center",
    margin: 10,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#E7D3BC",
  },
  alternativas: {
    textAlign: "center",
    fontSize: 20,
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
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  textosRodape: {
    fontSize: 15,
  },
  correto: {
    color: "#34A853",
  },
  errado: {
    color: "#EB4335",
  },
  time: {
    color: "#FFF",
    alignSelf: "center",
  },
  contador: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 60,
    fontWeight: "bold",
  },
  ocultar: {
    display: "none",
  },
});

export default Quiz;
