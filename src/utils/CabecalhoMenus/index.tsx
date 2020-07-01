import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CabecalhoMenus = (props: any) => {
    return (
        <>
        <View style={styles.fundo}>
            <Text style={styles.titlePagina}>{props.title}</Text>
            <Text style={styles.title}>Mestre Cervejeiro</Text>
        </View>
        </>
    ) 
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#F2A951',
        width: 400,
        height: 100,
    },
    titlePagina: {
        textTransform: 'uppercase',
        textAlign:'center',
        color: '#FFF',
        fontSize:24,
        paddingTop: 10,
        fontWeight:'bold'

    },
    title: {
        textTransform: 'uppercase',
        textAlign:'center',
        color: '#000',
        paddingTop: 10,
        fontSize:24,
        fontWeight:'bold'
    }
  });

export default CabecalhoMenus;
