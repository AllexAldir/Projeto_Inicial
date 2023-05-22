//import { Component } from 'react';
import { Text, View } from 'react-native';// componentes principais
import { StyleSheet } from 'react-native';
import Comp01 from './components/comp1.jsx'; //Importação do componente
/*
//Utilizando componentes de classes:
export default class AppPrincipal extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text>Teste Visivel</Text>
        </View>
      </View>
    )
  }
}
*/


export default function AppPrincipal() {
  return (
    <View style={estilos.home}>
      <View>
        <Text style={estilos.txt}>Teste Visivel</Text>
      </View>
      <View>
        <Text>Teste Visivel2</Text>
      </View>
      <Comp01 />
    </View>



    //Associa para a minha classe(style)
  );
}

const estilos = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 4,
    alignItems: 'center',
    flex: 1 //coloca centralizado

  },
  txt: {
    color: 'red',
    fontSize: 45
  }
})
