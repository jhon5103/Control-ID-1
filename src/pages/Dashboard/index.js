import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from '../Dashboard/styles';

const Dashboard = () => {
    const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <View style={styles.containerCards}> 
      <View style={styles.card}>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Consulta')}>
            <Text style={styles.textCard}>Consulta de colaboradores</Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('registrarColab')}>
            <Text style={styles.textCard}>Cadastrar colaboradores</Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textCard}>Criar usuário</Text> 
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};



export default Dashboard;
