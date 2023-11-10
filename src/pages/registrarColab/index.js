import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput,ScrollView,Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { number } from 'yup';
import styles from '../registrarColab/styles';

export default function registrarColab() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [estadoCivil, setestadoCivil] = useState('');
  const [sexo, setSexo] = useState('');
  const [tel, setTel] = useState('');
  const [contato, setContato] = useState('');
  const [dataNas, setdataNas] = useState('');
  const [dataAdmissao, setdataAdmissao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pis, setPis] = useState('');
  const [nCarteira, setnCarteira] = useState('');
  const [serieCarteira, setserieCarteira] = useState('');
  const [id, setId] = useState('');


 const handleRegistro = () => {
    // Aqui você pode adicionar a lógica para processar o registro
    console.log(`Nome: ${nome}, Cargo: ${cargo}`);
  };




  return (
      
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={400} style={styles.space}>
        <Text style={styles.textSpace}>Digite os dados para cadastrar o colaborador!</Text>
      </Animatable.View> 
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
        value={cpf}
        onChangeText={text => setCPF(number)}
      />
       <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={text => setRG(number)}
      />
       <TextInput
        style={styles.input}
        placeholder="Naturalidade"
        value={naturalidade}
        onChangeText={text => setNaturalidade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado civil"
        value={estadoCivil}
        onChangeText={text => setestadoCivil(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={text => setSexo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={tel}
        onChangeText={text => setTel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato de emergência"
        value={contato}
        onChangeText={text => setContato(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        value={dataNas}
        onChangeText={text => setdataNas(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de admissão"
        value={dataAdmissao}
        onChangeText={text => setdataAdmissao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={text => setEndereco(text)}
      />
      
      
       <TextInput
        style={styles.input}
        placeholder="PIS/PASEP"
        value={pis}
        onChangeText={text => setPis(number)}
      />
       <TextInput
        style={styles.input}
        placeholder="Número da carteira de trabalho"
        value={nCarteira}
        onChangeText={text => setnCarteira(number)}
      />

       <TextInput
        style={styles.input}
        placeholder="Série da carteira de trabalho"
        value={serieCarteira}
        onChangeText={text => setserieCarteira(number)}
      />
      
      <View style={styles.registrarButton}>
      <TouchableOpacity>
        <Text style={styles.registrarText} onPress={handleRegistro}>Registrar</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}



