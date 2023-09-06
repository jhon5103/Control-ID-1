import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';
import styles from './styles'


export default function Login(){
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  //const [pressed, setPressed] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
 /* const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };*/
  function handleSingIn(){
    if(login===''|| senha===''){
      setErrorMessage("campo obrigatório*")
      return;
    }
    setErrorMessage(null)
    verifi()
    
  }
  function verifi(){
    if(login==='admin'|| senha=='admin'){
      window.alert("Login realizado")
      
    }

    
  }
  function registrar(){
    
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
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            
              <View style={styles.eyeContainer}>
                <TextInput
                 style={styles.inputSenha} placeholder='Senha' secureTextEntry={mostrarSenha} 
                 value={senha} onChangeText={(texto)=> setSenha(texto)}
                />
                            
                
                <TouchableOpacity style={styles.eye}  onPress={()=>setMostrarSenha(!mostrarSenha)}>
                  { mostrarSenha? 
                  <Ionicons name='eye-off' color='#2D063B' size={25}/>
                  :
                  <Ionicons name='eye' color='#2D063B' size={25}/>

                  }
                  
                </TouchableOpacity>
                
              </View>
              <Text style={styles.errorMessage}>{errorMessage}</Text>   

              <TouchableOpacity 
                style={styles.buttonAcessar}
                onPress={handleSingIn}
                onChangeText={verifi}
                >

               <Text style={styles.buttonTextAcessar}>Acessar</Text>
              </TouchableOpacity>

             <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonTextRegister}>Ainda não tem uma conta? Clique aqui</Text>
             </TouchableOpacity>

           </Animatable.View>

        </View>
        
    );
}

