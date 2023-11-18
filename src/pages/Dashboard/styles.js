import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FCFAD4'
    },
    cabecalho:{
      color:'#2D063B',
      marginTop:'3%',
      position: 'absolute',  // Posicionamento absoluto
      left: 0,
      right: 0,
      zIndex: 1,
    },
    icone: {
      marginTop: '10%',  // Ajuste de margem
    },
    heading: {  
      color:'#2D063B',  
      marginTop: '40%',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: '5%',
      padding:16       

    },
    containerCards:{
      marginTop:'20%',  
      padding:16          
    },
    card: {
      backgroundColor: '#2D063B',
      padding: 10,
      marginBottom: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
    textCard:{
      color:'#fff',
      fontWeight:'bold',
      padding:16      
    },

  })

  export default styles