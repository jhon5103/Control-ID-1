import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor:'#FCFAD4'
  
    },
    space:{
      marginTop:'15%',
      marginBottom:'18%',
    },
    textSpace:{
      fontSize:30,
      fontWeight:'bold',
      color:'#2D063B',
      
    },
    icone:{
      flexDirection: "row",
      justifyContent: "space-between",
      color:'#2D063B',
      marginTop:'10%'
    },
    input: {
      color:'#2D063B',
      height: 40,
      fontSize: 15,
      borderColor:'#2D063B',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 16,
      paddingHorizontal: 8,
      backgroundColor:'#fff'
    },
    registrarButton:{
      backgroundColor: '#2D063B',
      borderRadius:10,
      paddingVertical:8,
      marginTop:10,
      alignItems:'center',
      justifyContent:'center',
      height:50,
      width:'100%',
      marginBottom: '5%',
    },
    registrarText:{
      color:'#FFF',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20
  
    }
  });

export default styles