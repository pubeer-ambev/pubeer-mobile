import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CabecalhoMenus from "../../utils/CabecalhoMenus";

const MenuUsuario = () => {
    return (
        <>
        <View style={styles.cabecalho}>
            <CabecalhoMenus title='Olá, Maria' />
        </View>
        <View style={styles.container}>
        <View style={styles.main}>
            <View style={styles.tampinhas}>
                <Text style={styles.textos}>5654</Text>
                <Text style={styles.textos}>Tampinhas</Text>
            </View>
        </View>
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        flex:1,
        backgroundColor: "#000",
        padding: 20,
    },
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: "#000",
    },
    main: {
      flex: 1,
      alignItems: 'center',
    },
    tampinhas: {
        backgroundColor: '#8F5236',
        height: 65,
        width: 300,
        borderRadius: 30
    },
    textos: {
        textTransform: 'uppercase',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 25
    }
  });

export default MenuUsuario;
