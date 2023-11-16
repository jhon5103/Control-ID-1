import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'



export default function Register() {

    const navigation = useNavigation();
    const handleGoToLogin = () => {
        navigation.navigate('Login');
      };
    const [mostrarSenha, setMostrarSenha] = useState(true);
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [dados, setDados] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://locahost:3000/clientes');
          const data = response.json()
          setDados(data)
          console.log(dados)
        }catch(err){
          console.log("Error")
        }
      }
      ;
      fetchData()
    }, []); 

    /*useEffect(() => {
        const db = DatabaseConnection.getConnection();
        db.transaction((tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS funcionarios (cpf TEXT PRIMARY KEY, email TEXT, nome TEXT NOT NULL, telefone TEXT, senha TEXT NOT NULL)',
            [],
            () => {
              console.log('Tabela "users" criada com sucesso.');
            },
            (error) => {
              console.error('Erro ao criar a tabela "users":', error);
            }
          );
        });
      }, []); */
    

    const handleRegister = () => {
        if(cpf === "" ||nome === "" ||telefone === "" || senha === "" || confirmSenha === "") {
            setErrorMessage("Os campos são obrigatórios");
            return;
        }
        if(senha !== confirmSenha) {
            setErrorMessage("As senhas não coincidem");
            return;
        }

        setErrorMessage(null);
        const db = DatabaseConnection.getConnection();

        /*db.transaction((tx) => {
          tx.executeSql(
            'INSERT INTO funcionarios (cpf, email, nome, telefone, senha) VALUES (?, ?, ?, ?, ?)',
            [cpf, nome, email, telefone, senha],
            (_, result) => {
              console.log('usuário cadastro com sucesso!');
              setCadastroSucesso(true);
              setTimeout(() => {
                setCadastroSucesso(false);
                navigation.navigate('Login')
              }, 3000);
            },
            (_, error) => {
              console.error('Erro ao inserir o usuário', error)
            }
            )
        })*/

  
    };

    return(
        <View style={styles.container}>
          
            <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerBemvindo}>
                <Text style={styles.title}> Cadastre-se! </Text>
            </Animatable.View>   
            <ScrollView>
            <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
                <TextInput 
                    style={styles.inputLogin} 
                    placeholder='Nome'
                    value={nome} 
                    onChangeText={(texto)=> setNome(texto)}
                />
                <TextInput 
                    style={styles.inputLogin} 
                    placeholder='Email'
                    value={email} 
                    onChangeText={(texto)=> setEmail(texto)}
                />
                <TextInput 
                    style={styles.inputLogin} 
                    placeholder='CPF'
                    value={cpf} 
                    onChangeText={(texto)=> setCpf(texto)}
                />
                <TextInput 
                    style={styles.inputLogin} 
                    placeholder='Telefone'
                    value={telefone} 
                    onChangeText={(texto)=> setTelefone(texto)}
                />
                
                

                  
                  
                <View style={styles.eyeContainer}>

                
                    <TextInput
                        style={styles.inputSenha} 
                        placeholder='Senha' 
                        secureTextEntry={mostrarSenha}
                        value={senha} 
                        onChangeText={(texto)=> setSenha(texto)}
                    />
                    <TouchableOpacity style={styles.eye}  onPress={()=>setMostrarSenha(!mostrarSenha)}>
                    { mostrarSenha? 
                    <Ionicons name='eye-off' color='#2D063B' size={25}/>
                    :
                    <Ionicons name='eye' color='#2D063B' size={25}/>

                    }
                    
                    </TouchableOpacity>
                </View>  

                <View style={styles.eyeContainer}>

                    <TextInput
                        style={styles.inputSenha} 
                        placeholder='Confirmar Senha' 
                        secureTextEntry={mostrarSenha}
                        value={confirmSenha} 
                        onChangeText={(texto)=> setConfirmSenha(texto)}
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
                    onPress={handleRegister}>
                    <Text style={styles.buttonTextAcessar}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonGoLogin} onPress={handleGoToLogin}>
                    <Text style={styles.buttonTextGoLogin}>Já tem uma conta? Faça login</Text>
                </TouchableOpacity>

            </Animatable.View>
            </ScrollView>
        </View>
    );
}