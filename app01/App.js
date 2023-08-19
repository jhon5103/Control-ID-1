import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const exibirAlerta=()=>{
    window.alert('Bem-vindo!');
  };
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const isMobile=Dimensions.get('screen').width <768;//Para dimensionar melhor a tela no smartphone
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <View style={[styles.container0, isMobile && styles.mobileContainer0]}>
      <Image
       source={require('./imagens/logo.png')} //importando a logo
       style={styles.logo}// setando o css da logo
       resizeMode="contain" // O modo de redimensionamento da imagem
      />
      <Text style={styles.display0}>CONTROL ID</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.entrada}// get no css da entrada
          value={String(login)}// setando o tipo de dado
          onChangeText={(texto)=>(setLogin(texto))}
          placeholder='Login'
        />
      
        <TextInput
          style={styles.entrada}// get no css da entrada
          value={String(senha)}// setando o tipo de dado
          onChangeText={(texto)=>(setSenha(texto))}
          placeholder='Senha'
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity onPress={toggleMostrarSenha}>
        <Text style={styles.senhaMostrar}>{mostrarSenha ? "Esconder Senha" : "Mostrar Senha"}</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={exibirAlerta} style={styles.buttonCicle}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
  
      </View>
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container0: {// css do fundo da página 
    flex: 1,
    maxHeight:'100%',
    maxWidth:'100%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#F0F8FF',
  },
  display0: {// css do nome da empresa
    fontFamily: 'Impact',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer:{// css do container do conteúdo da página 
    width: '70%',
    padding: 30,           
  },
  entrada:{// css da entrada de dados, login e senha
    fontSize:15,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonCicle:{// css do botão
    backgroundColor:'black',
    padding:3,
    maxWidth:'50%',
    marginLeft:'25%',
    marginTop:'15%',
    shadowRadius: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
  }},
  buttonText:{// css do texto do botão
    color:'white',
    textAlign:'center',
    fontSize:14,
  },
  logo:{// css da logo
    width: 200, 
    height: 200, 
    marginTop: 20, 
  },
  senhaMostrar:{// css do mostrar senha
    fontSize:12,
    textDecorationLine: 'underline',
  },
});
