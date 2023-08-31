import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInX"
                    source={require('../../../imagens/logo.png')}
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>

            <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
                
                <Text style={styles.title}>Monitore os horários trabalhados seja onde for!</Text>
                <Text style={styles.texto}>Faça o login para iniciarmos.</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            </Animatable.View>

           
        </View>
        
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FCFAD4',

    },
    logo: {
        width:'90%',
    },
    containerLogo: {
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        marginTop: 12,
        marginBottom: 12,
        color:'#2D063B'
    },
    texto:{
        color:'#a1a1a1',
    },
    button: {
        backgroundColor:'#2D063B',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:'15%',
        alignSelf:'center',
        width:'60%',
        paddingVertical: 8,
        borderRadius: 50,
    },
    buttonText: {
        fontSize:18,
        color:'#fff',
        fontWeight:'900'
    },
});
