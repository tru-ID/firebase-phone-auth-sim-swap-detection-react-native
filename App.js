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
import auth from '@react-native-firebase/auth';
const App = () => {
  // Replace `URL` below with LocalTunnel URL in the format : https://{subdomain}.loca.lt
  const URL = 'https://wonderful-lionfish-40.loca.lt';
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [sentCode, setSentCode] = React.useState(null);
  const [code, setCode] = React.useState('');
  const onPressHandler = async () => {
    setLoading(true);
    try {
      // do SIMCheck stuff with the dev server here before firebase stuff sort of first level of protection
      const response = await fetch(`${URL}/sim-check`);
      const data = await response.json();
      if (!data.no_sim_change) {
        return Alert.alert(
          'Something went wrong',
          'SIM changed too recently. Please contact support.',
          [
            {
              text: 'Close',
              onPress: () => console.log('Alert closed'),
            },
          ],
        );
      }
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setLoading(false);
      setSentCode(confirmation);
    } catch (e) {
      setLoading(false);
      Alert.alert('Something went wrong', e.message, [
        {
          text: 'Close',
          onPress: () => console.log('Alert closed'),
        },
      ]);
    }
  };
  const confirmationHandler = async () => {
    try {
      setLoading(true);
      const resp = await sentCode.confirm(code);
      setLoading(false);
      if (resp) {
        Alert.alert('Something went wrong', 'Successfully logged in', [
          {
            text: 'Close',
            onPress: () => console.log('Alert closed'),
          },
        ]);
      }
    } catch (e) {
      setLoading(false);
      Alert.alert('Something went wrong', e.message, [
        {
          text: 'Close',
          onPress: () => console.log('Alert closed'),
        },
      ]);
    }
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.heading}>Tru.ID + Firebase Auth</Text>
      <View style={styles.form}>
        {sentCode ? (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="OTP"
              placeholderTextColor="#d3d3d3"
              onChangeText={text => setCode(text)}
              value={code}
            />
            {loading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : (
              <TouchableOpacity
                onPress={confirmationHandler}
                style={styles.button}>
                <Text style={styles.buttonText}>Verify</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View>
            <TextInput
              style={styles.textInput}
              keyboardType="phone-pad"
              placeholder="ex. +448023432345"
              placeholderTextColor="#d3d3d3"
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
            />

            {loading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : (
              <TouchableOpacity onPress={onPressHandler} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
