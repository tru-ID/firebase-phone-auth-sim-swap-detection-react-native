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
} from 'react-native';

const App = () => {
  // Replace `URL` below with LocalTunnel URL in the format : https://{subdomain}.loca.lt
  const URL = 'https://wonderful-lionfish-40.loca.lt';

  // we'll handle the SIMCheck API Call and Firebase Phone Authentication in the function below
  const onPressHandler = async () => {};

  // we'll handle verifying the received OTP in the function below
  const confirmationHandler = async () => {};

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.heading}>tru.ID + Firebase Auth</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
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
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e67e22',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  paragraph: {
    fontSize: 12,
    borderBottomColor: '#e67e22',
  },
  buttonText: {
    color: '#ffffff',
  },
  textInput: {
    padding: 15,
    borderColor: '#20232a',
    borderWidth: 3,
    elevation: 7,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    width: 0.8 * Dimensions.get('window').width,
  },
});

export default App;
