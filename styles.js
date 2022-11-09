import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: 'bone white',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      jokeText: {
        textAlign: 'center',
        fontSize: 48,
      },
      punchline: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold'
      },
      bigButton: {
        backgroundColor: '#414865',
        padding: 24,
        borderRadius: 6
      },
      buttonText: {
        color: 'white',
        fontSize: 30,
      },
      hidden:{
        backgroundColor: '#000000',
        width: '100%',
        padding: 16
      },
      show: { 
        backgroundColor: 'transparent',
        width: '100%',
        padding: 16
      },
      punchlineInstructions: {
        fontSize: 30,
        textAlign: 'center',
        
      },
      background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'stretch',
      },

})

export default styles