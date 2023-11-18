import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from 'react-native-vector-icons'; // Importe o Ionicons
import * as Animatable from 'react-native-animatable';

<<<<<<< HEAD
import styles from './styles';
=======
import styles from '../Dashboard/styles';
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270

const Dashboard = () => {
    const navigation = useNavigation();

    return (
<<<<<<< HEAD
        
       

            
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                        <Ionicons style={styles.icone}
                            name="chevron-back"
                            size={40}
                            color="#2D063B"
                            onPress={() => {navigation.navigate("Login")}}
                        />
                </View>
=======
        <View style={styles.container}>

<<<<<<< HEAD
            <Animatable.View animation="fadeInLeft" delay={400} style={styles.container}>

                <View style={styles.pesquisar}>
                    <Ionicons style={styles.icone}
                    name="chevron-back"
                    size={40}
                    color="#2D063B"
                    onPress={() => {navigation.navigate("Login")}}
                />
                </View>

                <View style={styles.container}>
                    <Text style={styles.heading}>Dashboard</Text>
                    <View style={styles.containerCards}>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Consulta')}>
                                <Text style={styles.textCard}>Consultar colaboradores</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card1}>
                            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegistrarColab')}>
                                <Text style={styles.textCard}>Cadastrar colaboradores</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </Animatable.View>

=======
            <View style={styles.container}>
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
                <Text style={styles.heading}>Dashboard</Text>
                <View style={styles.containerCards}>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Consulta')}>
                            <Text style={styles.textCard}>Consulta de colaboradores</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegistrarColab')}>
                            <Text style={styles.textCard}>Cadastrar colaboradores</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('')}>
                            <Text style={styles.textCard}>Criar usuário</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
<<<<<<< HEAD
        
=======
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53
        </View>
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
    );
};

export default Dashboard;
