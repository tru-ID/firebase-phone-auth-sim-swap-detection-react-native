import React from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

const App = () => {
  // Replace `URL` below with LocalTunnel URL in the format : https://{subdomain}.loca.lt
  const URL = 'https://wonderful-lionfish-40.loca.lt';

  // we'll handle the SIMCheck API Call and Firebase Phone Authentication in the function below
  const onPressHandler = async () => {};

  // we'll handle verifying the received OTP in the function below
  const confirmationHandler = async () => {};

  return (
     <LinearGradient
      colors={['rgba(25, 85, 255, 40)', 'rgba(10, 10, 50, 66)']}
      useAngle={true}
      angle={0}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle="light-content" />
        <View style={styles.box}>
          <Image
            style={styles.logo}
            source={require('./images/tru-logo.png')}
          />
          <Text style={styles.heading}>tru.ID + Firebase Auth</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  box: {
    width: '90%',
    borderRadius: 3,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0.7 * Dimensions.get('window').height,
    padding: 15,
  },
  logo: {
    marginTop: 10,
    width: 0.5 * Dimensions.get('window').width,
    height: 200,
  },
  heading: {
    fontSize: 50,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1955ff',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#1955ff',
    marginTop: 17,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
  },
  paragraph: {
    fontSize: 12,
    borderBottomColor: '#e67e22',
  },
  textInput: {
    padding: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#858585',
    borderWidth: 0.4,
    elevation: 7,
    shadowColor: '#858585',
    shadowOffset: {width: 0.5, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    color: '#000',
    width: 0.7 * Dimensions.get('window').width,
  },
  spinner: {
    marginTop: 20,
  },
});
export default App;
