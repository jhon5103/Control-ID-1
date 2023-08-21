import { StatusBar } from 'expo-status-bar';
import { StyleSheet, isMobile, Text, View, TextInput,TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [pressed, setPressed] = useState(false);
  const isMobile=Dimensions.get('screen').width <768; //Para dimensionar melhor a tela no smartphone
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };
  const exibirAlerta=()=>{
    window.alert('Bem-vindo!');
  };

  return (
    <View style={[styles.container0, isMobile ? styles.mobileContainer0 : null]}>
            <Image
       source={require('./imagens/logo.png')} //importando a logo
       style={styles.logo}// setando o css da logo
       resizeMode="contain" // O modo de redimensionamento da imagem
      />
      <Text style={styles.display0}>CONTROL ID</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.entrada, isMobile ? styles.mobileEntrada : null]}// get no css da entrada
          value={String(login)}// setando o tipo de dado
          onChangeText={(texto)=>setLogin(texto)}
          placeholder='Login'
        />
      
        <TextInput
          style={[styles.entrada, isMobile ? styles.mobileEntrada : null]}// get no css da entrada
          value={String(senha)}// setando o tipo de dado
          onChangeText={(texto)=>setSenha(texto)}
          placeholder='Senha'
          secureTextEntry={!mostrarSenha}
        />
        <View style={[styles.senhaMostrarContainer, styles.mostrarSenha, isMobile ? styles.mobileSenhaMostrarContainer : null]}>
        <TouchableOpacity onPress={toggleMostrarSenha}>
        <Text style={[styles.mostrarSenha, isMobile ? styles.mobileSenhaMostrarContainer : null]}>{mostrarSenha ? "Esconder Senha" : "Mostrar Senha"}</Text>
        </TouchableOpacity>
        </View>
       <TouchableOpacity 
        onPress={exibirAlerta}
        onPressIn={()=>setPressed(true)}
        onPressOut={()=> setPressed(false)}
        style={[styles.buttonCicle, pressed && styles.buttonPressed,]}>

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
    padding: 30,
    alignItems: 'center',
    justifyContent:'center',
    width:'40%',
  },
  entrada:{// css da entrada de dados, login e senha
    fontSize:15,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width:'60%',
  },
  mobileEntrada: {
    width: '250%',
  },
  buttonCicle:{// css do botão
    backgroundColor:'black',
    padding:10,
    alignItems:'center',
    marginTop:'10%',
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
  mostrarSenha:{// css do mostrar senha
    fontSize:12,
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',

  },
  senhaMostrarContainer: {
    alignSelf: 'flex-start', // Alinhar o container ao canto esquerdo
    width:'60%',
    justifyContent:'center',
    marginLeft:'20%'
  },
  mobileSenhaMostrarContainer:{
    alignSelf: 'flex-start', // Alinhar o container ao canto esquerdo
    width:'100%',
    justifyContent:'center',
    marginLeft:'-38%'
  }

});
