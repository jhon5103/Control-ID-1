import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  "#FCFAD4", // Adicionei uma cor de fundo branca, mas você pode alterar
    },
    containerBemvindo: {
        
        marginTop:'30%',
        marginBottom:'30%',
        marginStart:'5%'
    },
    containerForm: {
        backgroundColor: "#ffff",
        flex: 2,
        width: "100%",
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#2D063B', // Você pode ajustar a cor
    },
    inputLogin: {
        marginTop: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#2D063B',
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    inputSenha: {
        borderBottomWidth: 1,
        borderBottomColor: '#2D063B',
        marginBottom: 20,
        fontSize: 20,
        paddingHorizontal: 10,
        fontWeight: "bold",
    },
    buttonAcessar: {
        backgroundColor: '#2D063B',
        borderRadius:4,
        paddingVertical:8,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    buttonTextAcessar: {
        color:'#Fff',
        fontWeight:'900',
        fontSize:18
    },
    buttonGoLogin:{
        marginTop:14,
        alignSelf:'center',
        color:'#2D063B'
    }
})

export default styles