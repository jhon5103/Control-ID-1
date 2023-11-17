import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from 'react-native-vector-icons'; // Importe o Ionicons

import styles from './styles';

const Dashboard = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <View style={styles.containerIcone}>
          <Ionicons
                style={styles.icone}
                name="chevron-back"
                size={40}
                color="#2D063B"
                onPress={() => { navigation.navigate("Login") }}
            />
          </View>

            <View style={styles.container}>
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
        </View>
    );
};

export default Dashboard;
