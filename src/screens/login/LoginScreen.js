import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Styles';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);

  const onAuthStateChanged = user => {
    if (user) {
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      Alert.alert('Successfully Verified');
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Invalid code.');
      Alert.alert('Invalid OTP');
    }
  }

  if (!confirm) {
    return (
      <View>
        <Text style={styles.mobileText}>Mobile Number:</Text>
        <TextInput
          name="mobile"
          style={styles.textInput}
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={value => setPhoneNumber(value)}
        />
        <TouchableOpacity
          onPress={() => signInWithPhoneNumber('+91' + phoneNumber)}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.registerBtn}>New User! Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.header}>LOGIN</Text>
      <View></View>

      <View>
        <TextInput
          value={code}
          onChangeText={text => setCode(text)}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => confirmCode()}>
          <Text style={styles.confirmCode}>Confirm Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
