import { View, Text, StyleSheet } from "react-native";
import React from "react";
import estilo01 from "../public/css/estilo01";

export default function Comp01({ curso, nota }) {
    return (
        <View>
            <View>
                <Text style={estilo01.contanier}>Aqui está o componente: {curso}</Text>
                <Text style={estilo01.texto}>Aqui está a nota: {nota}</Text>

            </View>


        </View>
    )
}

// const estilos = StyleSheet.create({
//     text1: { //Classe
//         color: 'red',
//         fontSize: 20
//     },
//     text2: {
//         //color: 'blue',
//         fontSize: 25
//     }
// })