import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
    const navigation = useNavigation();

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
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerBemvindo}>
                <Text style={styles.title}> Cadastre-se! </Text>
            </Animatable.View>   

            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
                <TextInput 
                    style={styles.inputLogin} 
                    placeholder='Login'
                    value={login} 
                    onChangeText={(texto)=> setLogin(texto)}
                />

                <TextInput
                    style={styles.inputSenha} 
                    placeholder='Senha' 
                    secureTextEntry={true}
                    value={senha} 
                    onChangeText={(texto)=> setSenha(texto)}
                />

                <TextInput
                    style={styles.inputSenha} 
                    placeholder='Confirmar Senha' 
                    secureTextEntry={true}
                    value={confirmSenha} 
                    onChangeText={(texto)=> setConfirmSenha(texto)}
                />

                <Text style={styles.errorMessage}>{errorMessage}</Text>               

                <TouchableOpacity 
                    style={styles.buttonAcessar}
                    onPress={handleRegister}>
                    <Text style={styles.buttonTextAcessar}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonTextRegister}>Já tem uma conta? Faça login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
