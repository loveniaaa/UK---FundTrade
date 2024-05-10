import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Mail, Password} from '../../assets';
import {Button} from '../../components';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Home', {uid: user.uid});
      })
      .catch(error => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E5D5FF', '#481B6B']}
        style={styles.lineargradient}>
        <Text style={styles.text}>Log In</Text>
        <View style={styles.input}>
          <Mail style={styles.icon} />
          <TextInput
            placeholder="Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.input}>
          <Password style={styles.icon} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <Button label="Log In" onPress={onSubmit} />
        <Text>Or</Text>
        <Button label="Log in With Google" type="google" onPress={onSubmit} />
      </LinearGradient>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineargradient: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    paddingTop: 172,
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 60,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 43,
    borderWidth: 1,
    borderColor: '#5E2590',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 15,
    marginVertical: 14,
  },
  icon: {
    marginRight: 10,
  },
});
