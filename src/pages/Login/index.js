import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity } from "react-native";
=======
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Alert } from "react-native";
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';
import styles from './styles'
<<<<<<< HEAD
import { DatabaseConnection } from '../../database/date'


=======
import { DatabaseConnection } from '../../database/database'

const db = DatabaseConnection.getConnection();
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270


export default function Login(){
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("")
  //const [pressed, setPressed] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
 /* const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };*/
  function handleSingIn(){
<<<<<<< HEAD
    if(cpf===0|| senha===''){
=======
    if(email===''|| senha===''){
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
      setErrorMessage("campo obrigatório*")
      return;
    }
    setErrorMessage(null)
    verifi()
  }
  function verifi(){
<<<<<<< HEAD

    const db = DatabaseConnection.getConnection();
    db.transaction((tx) =>{
      tx.executeSql(
        'SELECT * FROM user WHERE cpf = ? AND senha = ?', [cpf, senha],
        (_, { rows }) => {
          console.log('Consulta executada com sucesso. Linhas encontradas:', rows.length);
          if (rows.length > 0){
            console.log('logou')
=======
    if(email==="admin" && senha ==="admin")
      navigation.navigate("Dashboard")
    db.transaction((tx) =>{
      tx.executeSql(
        'SELECT * FROM funcionarios WHERE email = ? AND senha = ?', [email, senha],
        (_, { rows }) => {
          if (rows.length > 0){
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
            navigation.navigate('Dashboard')
          }else {
            console.log("Erro ao cadastrar")
          }
        },
        (_, error) => {
          console.error('Erro ao executar consulta SQL:', error)
        }
      )
    })
<<<<<<< HEAD
  
      
  }
  
=======

    
  }
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
  

    return(
      
        <View style={styles.container}>
<<<<<<< HEAD
            <View style={styles.pesquisar}>
                <Ionicons style={styles.icone}
=======
<<<<<<< HEAD
          <View style={styles.cabecalho}>
            <Ionicons style={styles.icone}
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53
                name="chevron-back"
                size={40}
                color="#2D063B"
                onPress={() => {navigation.navigate("Welcome")}}
              />
<<<<<<< HEAD
            </View>
=======
          </View>
=======
            <Ionicons style={styles.icone}
            name="chevron-back"
            size={40}
            color="#2D063B"
            onPress={() => {navigation.navigate("Welcome")}}
          />
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53

          <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerBemvindo}>

            <Text style={styles.title}> Bem-vindo! </Text>

          </Animatable.View>   

           <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
<<<<<<< HEAD
            <TextInput style={styles.inputLogin} placeholder='CPF'
              value={cpf} onChangeText={(texto)=> setCpf(texto)}
=======
            <TextInput style={styles.inputLogin} placeholder='Email'
              value={email} onChangeText={(texto)=> setEmail(texto)}
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
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

