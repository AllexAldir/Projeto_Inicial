import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Comp01() {
    return (
        <View>
            <View>
                <Text style={estilos.text2}>Aqui está o componente 1</Text>

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
        color: 'blue',
        fontSize: 25
    }
})