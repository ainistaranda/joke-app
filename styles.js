import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        flex: 1,
        backgroundColor: '#0bd3d3',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      jokeText: {
        textAlign: 'center',
        fontSize: 48,
      },
      punchline: {
        textAlign: 'center',
        color: '#f890e7',
        fontSize: 32,
      },
      bigButton: {
        backgroundColor: '#000000',
        padding: 24,
        borderRadius: 6
      },
      buttonText: {
        color: '#f890e7',
        fontSize: 30,
      },
      hidden:{
        backgroundColor: '#f890e7',
        width: '100%',
        padding: 16
      },
      show: { 
        backgroundColor: 'transparent',
        width: '100%',
        padding: 16
      } 

})

export default styles