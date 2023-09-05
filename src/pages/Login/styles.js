import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFAD4',
      },
      containerBemvindo:{
        marginTop:'30%',
        marginBottom:'30%',
        marginStart:'5%'
      },
      title:{
        fontSize:35,
        fontWeight:'bold',
        color:'#2D063B'
      },
      containerForm:{ 
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
      },
      inputLogin:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        borderBottomWidth:1,
        height:50,
        marginBottom:16,
        
      },
      inputSenha:{
        color:'#2D063B',
        fontWeight:'bold',
        width:'90%',
        fontSize:20,
  
      },
      buttonAcessar:{
        backgroundColor: '#2D063B',
        borderRadius:4,
        paddingVertical:8,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
      },
      buttonTextAcessar:{
        color:'#Fff',
        fontWeight:'900',
        fontSize:18
  
      },
      buttonRegister:{
        marginTop:14,
        alignSelf:'center',
        color:'#2D063B'
      },
      buttonTextRegister:{
        color:'#a1a1a1'
      },
      eyeContainer:{
        flexDirection:'row',
        with:'100%',
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        borderBottomWidth:1,
        height:50,
        marginBottom:16,
       // backgroundColor:'black'
      },
      eye:{
       // backgroundColor:'red',
        width:'13%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
      },
      errorMessage: {
        fontSize: 12,
        color:"red",
        fontWeight: "bold",
      }

})

export default styles