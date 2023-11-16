import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#FCFAD4',
    },
    heading: {
      color: '#2D063B',
      marginTop: 50,
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    item: {
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
    itemText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default styles;