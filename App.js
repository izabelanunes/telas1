// import React from "react";
// import {View, text} from "react- native";
// //todos os componetes usados, devem ter um import separado por virgula;


// function App(){
//      return(
//       //tem que ter para mostrar na tela

//       <View>
//         <Text>Olá Mundo!</Text>
//       </View>

//       //view é a tela ou o fragmento da tela

//      );
// }

// //depois de criar tenho que colocar o export
// export default App;//poderia por antes da function
// //indica a função que será executada 
// //o export não é o final do código

import React, {Component} from "react"
import {View, Text, Image} from "react-native";

class App extends Component{//herdando as caracteristicas do componente
  render(){
    let curso = 'INFO';

    return(
      <View>
        <Text>Olá Mundo</Text>
        <Text>Exemplo</Text>
        <Text style={{color: 'blue', fontSize:30, margin:15}}> Meu exemplo </Text>
        <Image source= {{url:'colocar a url aqui'}} style ={{with: 300, height:300}}></Image>// a uri tem que ser https,obrigatorio informar a largura e altura
        <Minhaimagem largura ={400} altura={400} nome="imagem1"
        <Text>{curso}</Text>
      </View>
    );
  }
}
export default App;
//é possivel que depois do export, se coloque mais funções/classes


class Minhaimagem extends Component{
  render() {

    let img= 'url da imagem';
    return(
      <View>
      <Image source ={{uri: img}} style={{width:300, height:300}}/>
      <image source={{uri: img}} style={{width: this.props.largura,height:this.props.altura}}/>
      <Text>{this.props.nome}</Text>
      </View>

    );
  }
}


