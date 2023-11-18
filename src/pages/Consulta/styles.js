import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {//container do botão voltar página
    backgroundColor:'#FCFAD4'
  },
  view: {// view da exibição dos dados
    marginTop: StatusBar.currentHeight,
    backgroundColor:'#FCFAD4',
    flex: 1

  },
<<<<<<< HEAD
  pesquisar: {//barra de pesquisa
    flexDirection: "row",
    backgroundColor:'#FCFAD4',
    maxWidth:'98%',
    color:'#2D063B',
    position: 'absolute',  // Posicionamento absoluto
    marginTop: '3%',
    left: 0,
    zIndex: 1,
=======
  cabecalho: {//barra de pesquisa
    flexDirection: "row",
    justifyContent: "",
    backgroundColor:'#FCFAD4',
    marginTop:'0%',
    padding:9,
    maxWidth:'94%',
    marginLeft:'3%'
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
  },
  containerDados:{// container dos dados
      flex: 1,
      padding: 20,
<<<<<<< HEAD
      marginTop:'30%',
=======
      marginTop:'10%',
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270

  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
    
  },

  item: {
    backgroundColor: '#2D063B',
    padding: 16,
    marginBottom: '5%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
<<<<<<< HEAD
    fontSize: 16,
    padding: 5,


  },
  lixeira:{
    //backgroundColor: '#2D063B',
    position: 'absolute',  // Posicionamento absoluto
    left:'5%',
    bottom: '10%', // Ajuste aqui para posicionar abaixo do item
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',


  },
  containerPlus:{
   marginLeft:'30%',
  //backgroundColor:'black'
    
  }
=======
  },
>>>>>>> 7047d4e9a704f4c215333dcbe478476c321c7270
  });
  

export default styles;