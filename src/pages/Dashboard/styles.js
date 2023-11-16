import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor:'#FCFAD4'
    },
    heading: {  
      color:'#2D063B',  
      marginTop: '19%',

      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: '15%',
    },
    containerCards:{
      marginTop:'20%'            
    },
    card: {
      backgroundColor: '#2D063B',
      padding: 16,
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
      fontWeight:'bold'
    },
    containerIcone:{
      marginTop:'6%',

    }
  })

  export default styles