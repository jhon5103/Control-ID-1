<<<<<<< HEAD
import React, { useState, useEffect  } from 'react';
=======
import React, { useState, useMemo  } from 'react';
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
import { View, TextInput, SafeAreaView, Text, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import { DatabaseConnection } from '../dataColab/databacolab'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
<<<<<<< HEAD
import * as Animatable from 'react-native-animatable';
=======
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53

const Consulta = () => {
  const navigation = useNavigation();
  const [funcionariosData, setFuncionariosData] = useState([])
  const [text, setText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    consultarBancoDeDados();
  }, [])

  const consultarBancoDeDados = () => {
    const db = DatabaseConnection.getConnection();
    db.transaction((tx) => {
        tx.executeSql('SELECT * from colaboradores', [], (_, { rows }) => {
            const dadosFuncionarios = [];
            for (let i = 0; i <rows.length; i++) {
                dadosFuncionarios.push(rows.item(i));
            }
            setFuncionariosData(dadosFuncionarios)
        })
    })
  }

  
=======


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
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
<<<<<<< HEAD
      <Text style={styles.itemText}>Cargo: {item.cargo}</Text>
      <Text style={styles.itemText}>CPF: {item.cpf}</Text>
      <Text style={styles.itemText}>RG: {item.rg}</Text>
      <Text style={styles.itemText}>Naturalidade: {item.naturalidade}</Text>
      <Text style={styles.itemText}>EstadoCivil: {item.estadoCivil}</Text>
      <Text style={styles.itemText}>Sexo: {item.sexo}</Text>
      <Text style={styles.itemText}>Telefone: {item.telefone}</Text>
      <Text style={styles.itemText}>Contato: {item.telefone}</Text>
      <Text style={styles.itemText}>Data de nascimento: {item.dataNascimento}</Text>
      <Text style={styles.itemText}>Data de Admissão: {item.dataAdmissao}</Text>
      <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
      <Text style={styles.itemText}>PIS: {item.pis}</Text>
      <Text style={styles.itemText}>Série da Carteira: {item.serieCarteira}</Text>
     
      
    </View>
  );

  
=======
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
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270

  const handleSearchPress = () => {
    // Adicione a lógica de pesquisa aqui usando o valor em 'text'
    console.log('Pesquisar:', text);
    // Por exemplo, você pode filtrar os dados com base no texto e atualizar o estado da FlatList
  };

<<<<<<< HEAD
  const handleDeleteItem = (itemId) => {
    const db = DatabaseConnection.getConnection();
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM colaboradores WHERE id = ?', [itemId], (_, result) => {
        if (result.rowsAffected > 0) {
          console.log('Item excluído com sucesso!');
          consultarBancoDeDados(); // Atualize a lista de funcionários após excluir um item
        } else {
          console.log('Nenhum item encontrado para excluir.');
        }
      });
    });
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.pesquisar}>
            <Ionicons
=======
  return (
    <SafeAreaView style={styles.view}>
<<<<<<< HEAD

      <Animatable.View animation="fadeInDown" delay={200} style={styles.pesquisar}>
            <Ionicons 
=======
      <View style={styles.containerIcon}>
            <Ionicons style={styles.icone}
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53
            name="chevron-back"
            size={40}
            color="#2D063B"
            onPress={() => {navigation.navigate("Dashboard")}}
          />
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
      
      
=======
      </View>
      <View style={styles.cabecalho}>
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270

>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          autoCapitalize="none"
          autoCorrect={false}
          value={text}
          onChangeText={(value) => setText(value)}
<<<<<<< HEAD
          
=======
<<<<<<< HEAD
          
=======
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53
        />
        <Ionicons name="search" size={38} color="#2D063B" onPress={handleSearchPress} />
      </Animatable.View>

      <Animatable.View animation="fadeInLeft" delay={250} style={styles.containerDados}>
      <FlatList
        data={funcionariosData}
        renderItem={renderItem}
<<<<<<< HEAD
        keyExtractor={(item) => item.id.toString()} // Use toString() para garantir que a chave seja uma string
        />
    </Animatable.View>
    <Animatable.View animation="fadeInUp" delay={300} style={styles.lixeira}>
=======
<<<<<<< HEAD
        keyExtractor={(item) => item.id.toString()} // Use toString() para garantir que a chave seja uma string
        />
    </View>
    <View style={styles.lixeira}>
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53

    <MaterialIcons
      name="delete"
      size={60}
      color="#2D063B"
      style={styles.lixeiraIcon}
      onPress={() => handleDeleteItem(item.id)}     
       />
    <FontAwesome
      name="plus"
      size={60}
      color="#2D063B"
      style={styles.containerPlus}
      onPress={() => {navigation.navigate("RegistrarColab")}}

    />
<<<<<<< HEAD
  </Animatable.View>

</SafeAreaView>
=======
  </View>

</SafeAreaView>
=======
        keyExtractor={(item) => item.id}
      />
    </View>
    </SafeAreaView>
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
>>>>>>> f249ea1bbf520bf4933e0aabbc944efddafa5e53
    
    
  );
};

export default Consulta;
