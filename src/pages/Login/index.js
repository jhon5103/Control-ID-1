import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import {Ionicons} from '@expo/vector-icons';


export default function Login(){

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [pressed, setPressed] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(true);
 /* const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };*/
  function handleSingIn(){
    if(login===''|| senha===''){
      window.alert("Prencha os campos!")
      return;
    }
    
  }

    return(
        <View style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerBemvindo}>
            <Text style={styles.title}> Bem-vindo! </Text>

          </Animatable.View>   

           <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
            <TextInput style={styles.inputLogin} placeholder='Login'
            value={login} onChangeText={(texto)=> setLogin(texto)}
            />
            
              <View style={styles.eyeContainer}>
                <TextInput
                 style={styles.inputSenha} placeholder='Senha' secureTextEntry={mostrarSenha} 
                 value={senha} onChangeText={(texto)=> setSenha(texto)}
                />               
                
                <TouchableOpacity style={styles.eye}  onPress={()=>setMostrarSenha(!mostrarSenha)}>
                  { mostrarSenha? 
                  <Ionicons name='eye' color='#2D063B' size={25}/>
                  :
                  <Ionicons name='eye-off' color='#2D063B' size={25}/>

                  }
                  
                </TouchableOpacity>
              </View>
             

              <TouchableOpacity 
                style={styles.buttonAcessar}
                onPress={handleSingIn}>

               <Text style={styles.buttonTextAcessar}>Acessar</Text>
              </TouchableOpacity>

             <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.buttonTextRegister}>Ainda não tem uma conta? Clique aqui</Text>
             </TouchableOpacity>

           </Animatable.View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFAD4',
    },
    containerBemvindo:{
      marginTop:'30%',
      marginBottom:'30%',
      marginStart:'5%'
    },
    title:{
      fontSize:35,
      fontWeight:'bold',
      color:'#2D063B'
    },
    containerForm:{ 
      backgroundColor:'#fff',
      flex:1,
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingEnd:'5%'
    },
    inputLogin:{
      fontSize:20,
      fontWeight:'bold',
      marginTop:20,
      borderBottomWidth:1,
      height:50,
      marginBottom:16,
      
    },
    inputSenha:{
      color:'#2D063B',
      fontWeight:'bold',
      width:'90%',
      fontSize:20,

    },
    buttonAcessar:{
      backgroundColor: '#2D063B',
      borderRadius:4,
      paddingVertical:8,
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
      width:'100%'
    },
    buttonTextAcessar:{
      color:'#Fff',
      fontWeight:'900',
      fontSize:18

    },
    buttonRegister:{
      marginTop:14,
      alignSelf:'center',
      color:'#2D063B'
    },
    buttonTextRegister:{
      color:'#a1a1a1'
    },
    eyeContainer:{
      flexDirection:'row',
      with:'100%',
      fontSize:20,
      fontWeight:'bold',
      marginTop:20,
      borderBottomWidth:1,
      height:50,
      marginBottom:16,
     // backgroundColor:'black'
    },
    eye:{
     // backgroundColor:'red',
      width:'13%',
      height:50,
      justifyContent:'center',
      alignItems:'center'
    }
  });