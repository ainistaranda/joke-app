import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View } from 'react-native';
import styles from './styles';
// import Joke, Punchline, and Another components
import Joke from './components/Joke';
import Punchline from './components/Punchline';
import Another from './components/Another';
import PunchlineInstructions from './components/PunchlineInstructions';
import LottieView from 'lottie-react-native'


export default function App() {
  // create state to hold jokes
  const [jokeList, setJokeList] = useState()
  // create state to hold last joke index
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)
  // create function to get another joke
  const getNextJoke = () => {
    if(currentJokeIndex < jokeList.length - 1){
      setCurrentJokeIndex(currentJokeIndex + 1)
    } else {
      setCurrentJokeIndex(0)
    }
  }
  // useEffect to get all jokes
  useEffect(() => {
    fetch('https://api.sampleapis.com/jokes/goodJokes')
    .then(results => results.json())
    .then(setJokeList)
    .catch(alert)
  }, [])
  return (
    <View style={styles.container}>
        <LottieView source={require('./assets/background.json')} autoPlay loop style={styles.background}></LottieView>
      {/* <ImageBackground source={require('./assets/background.json')} style={styles.background}>
      </ImageBackground> */}
      {jokeList && jokeList.length
      ? <>
      <Joke joke={jokeList[currentJokeIndex].setup}/>
      <PunchlineInstructions/>
      <Punchline punchline={jokeList[currentJokeIndex].punchline} />
      </>
      :null
      }
      <Another getNextJoke={getNextJoke}/>
      <StatusBar style="auto" />
    </View>
  );
}


