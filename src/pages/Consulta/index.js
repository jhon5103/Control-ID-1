import React from 'react';
import { View, Text, FlatList} from 'react-native';
import styles from './styles'

const Consulta = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Funcionários Cadastrados</Text>
      <FlatList
        data={funcionariosData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};



export default Consulta;
