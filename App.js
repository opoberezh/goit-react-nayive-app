import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';


export default function App() {
  return (
    <ImageBackground source={require('./Screens/Image/forest.jpg')}  style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen/>
     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
  },
});
