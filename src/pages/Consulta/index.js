import React, { useState, useMemo  } from 'react';
import { View, TextInput, SafeAreaView, Text, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";


const Consulta = () => {
  const navigation = useNavigation();

  // Exemplo de dados de funcionários (substitua isso com seus dados reais)
  const funcionariosData = [
    { id: '1',
    nome: 'Jhonata Goncalves Antunes',
    Cargo: "Desenvolvedor",
    CPF: "123.456.789-00",
    RG: "1234567",
    Naturalidade: "São Paulo",
    EstadoCivil: "Casado",
    Sexo: "Masculino",
    Telefone: "(11) 1234-5678",
    },
    { id: '2',
    nome: "João da Silva",
    Cargo: "Desenvolvedor",
    CPF: "123.456.789-00",
    RG: "1234567",
    Naturalidade: "São Paulo",
    EstadoCivil: "Casado",
    Sexo: "Masculino",
    Telefone: "(11) 1234-5678" },
    { id: '3', nome: 'Funcionário 3' },
    // Adicione mais dados conforme necessário
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>Cargo: {item.Cargo}</Text>
      <Text style={styles.itemText}>CPF: {item.CPF}</Text>
      <Text style={styles.itemText}>RG: {item.RG}</Text>
      <Text style={styles.itemText}>Naturalidade: {item.Naturalidade}</Text>
      <Text style={styles.itemText}>EstadoCivil: {item.EstadoCivil}</Text>
      <Text style={styles.itemText}>Sexo: {item.Sexo}</Text>
      <Text style={styles.itemText}>Telefone: {item.Telefone}</Text>
    </View>
  );

  const [text, setText] = useState('');

  const handleSearchPress = () => {
    // Adicione a lógica de pesquisa aqui usando o valor em 'text'
    console.log('Pesquisar:', text);
    // Por exemplo, você pode filtrar os dados com base no texto e atualizar o estado da FlatList
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.containerIcon}>
            <Ionicons style={styles.icone}
            name="chevron-back"
            size={40}
            color="#2D063B"
            onPress={() => {navigation.navigate("Dashboard")}}
          />
      </View>
      <View style={styles.cabecalho}>

        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          autoCapitalize="none"
          autoCorrect={false}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Ionicons name="search" size={38} color="#2D063B" onPress={handleSearchPress} />

      </View>
      <View style={styles.containerDados}>
      <FlatList
        data={funcionariosData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    </SafeAreaView>
    
    
  );
};

export default Consulta;
