import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Comp01({ curso, nota, cor }) {
    return (
        <View>
            <View>
                <Text style={estilos.text2}>Aqui está o componente: {curso}</Text>
                <Text style={{ color: cor }}>Aqui está a nota: {nota}</Text>

            </View>


        </View>
    )
}

const estilos = StyleSheet.create({
    text1: { //Classe 
        color: 'red',
        fontSize: 20
    },
    text2: {
        //color: 'blue',
        fontSize: 25
    }
})