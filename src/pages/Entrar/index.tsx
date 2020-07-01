import React, { useState } from "react";
import { View, StyleSheet, Text, CheckBox } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import FormEmailSenha from "../../utils/FormEmailSenha";

const Entrar = () => {
    const [isSelected, setSelection] = useState(false);

    function navegarParaEntrar() {
      return null;
    }
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <FormEmailSenha />
                <Text style={[styles.titleInput]}>Esqueceu sua senha?</Text>
                <Text style={[styles.manterConectado]}> 
                    <CheckBox 
                    style={styles.check}
                    value={isSelected}
                    onValueChange={setSelection}
                    />
                    Manter conectado
                </Text>

                <RectButton style={[styles.entrar]} onPress={navegarParaEntrar}>
                    <Text style={styles.entrarText}>
                    Entrar
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000'
  },
  main: {
    flex: 1
  },
  titleInput: {
    color: '#F2A951',
    fontSize: 16,
    fontFamily: 'Roboto',
    paddingLeft: 5,
    textDecorationLine: 'underline',
    textAlign: 'right',
    paddingTop: 15
  },
  check: {
  },
  manterConectado: {
    color: '#F2A951',
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 30
  },
  entrarText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: 10
  },
  entrar:{
    backgroundColor: '#F2A951',
    width: 170,
    height: 45,
    borderRadius: 15,
    left: 100,
    marginTop: 55
  }
});


export default Entrar;
