import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
    const navigation = useNavigation();
    const handleGoToLogin = () => {
        navigation.navigate('Login');
      };
    const [mostrarSenha, setMostrarSenha] = useState(true);
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleRegister = () => {
        if(login === "" || senha === "" || confirmSenha === "") {
            setErrorMessage("Todos os campos são obrigatórios");
            return;
        }
        if(senha !== confirmSenha) {
            setErrorMessage("As senhas não coincidem");
            return;
        }

        setErrorMessage(null);
        // Aqui você pode adicionar a lógica de registro, por exemplo, chamar uma API.
        alert("Registrado com sucesso!"); 
    };

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerBemvindo}>
                <Text style={styles.title}> Cadastre-se! </Text>
            </Animatable.View>   

            <Animatable.View animation="fadeInUp" delay={400} style={styles.containerForm}>
                <TextInput 
                    style={styles.inputLogin} 
                    placeholder='Login'
                    value={login} 
                    onChangeText={(texto)=> setLogin(texto)}
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
            
        </View>
    );
}
