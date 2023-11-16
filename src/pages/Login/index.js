import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';
import styles from './styles'
import { DatabaseConnection } from '../../database/database'

const db = DatabaseConnection.getConnection();


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
    if(email===''|| senha===''){
      setErrorMessage("campo obrigatório*")
      return;
    }
    setErrorMessage(null)
    verifi()
    
  }
  function verifi(){
    if(email==="admin" && senha ==="admin")
      navigation.navigate("Dashboard")
    db.transaction((tx) =>{
      tx.executeSql(
        'SELECT * FROM funcionarios WHERE email = ? AND senha = ?', [email, senha],
        (_, { rows }) => {
          if (rows.length > 0){
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

    
  }
  

    return(
      
        <View style={styles.container}>
            <Ionicons style={styles.icone}
            name="chevron-back"
            size={40}
            color="#2D063B"
            onPress={() => {navigation.navigate("Welcome")}}
          />

          <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerBemvindo}>

            <Text style={styles.title}> Bem-vindo! </Text>

          </Animatable.View>   

           <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
            <TextInput style={styles.inputLogin} placeholder='Email'
              value={email} onChangeText={(texto)=> setEmail(texto)}
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

