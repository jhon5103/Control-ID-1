import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput,ScrollView,Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import '../registrarColab/ScrollablePage'
export default function registrarColab() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

 const handleRegistro = () => {
    // Aqui você pode adicionar a lógica para processar o registro
    console.log(`Nome: ${nome}, Cargo: ${cargo}`);
  };




  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={text => setNome(text)}
      />
       
    
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="RG"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Naturalidade"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado civil"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato de emergência"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de admissão"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      
      
       <TextInput
        style={styles.input}
        placeholder="PIS/PASEP"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Número da carteira de trabalho"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />

       <TextInput
        style={styles.input}
        placeholder="Série da carteira de trabalho"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      
      <View style={styles.registrarButton}>
      <TouchableOpacity>
        <Text style={styles.registrar} onPress={handleRegistro}>Registrar</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop:'15%',
    backgroundColor:'#FCFAD4'

  },
  input: {
    
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  registrarButton:{
    backgroundColor: '#2D063B',
    borderRadius:4,
    paddingVertical:8,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    width:'100%',
    marginBottom: '5%',
  },
  registrar:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'bold',

  }
});

