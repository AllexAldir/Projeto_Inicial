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
        <Text style={estilos.txt}>Cursos Disponiveis</Text>
        <Comp01 curso="JS" nota="10"/>
        {/* Passando valores para as props */}
      </View>
      <View>
        <Text style={{ color: 'green', fontSize: 40 }}>Cursos Disponiveis</Text>
        <Comp01 curso="Type" />
      </View>
    </View>



    //Associa para a minha classe(style)
  );
}

const estilos = StyleSheet.create({
  home: {
    backgroundColor: '#00000',
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
