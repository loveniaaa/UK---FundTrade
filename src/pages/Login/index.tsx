import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Mail, Password} from '../../assets';
import {Button} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E5D5FF', '#481B6B']}
        style={styles.lineargradient}>
        <Text style={styles.text}>Log In</Text>
        <View style={styles.input}>
          <Mail style={styles.icon} />
          <TextInput placeholder="Your Email" keyboardType="email-address" />
        </View>
        <View style={styles.input}>
          <Password style={styles.icon} />
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <Button label="Log In" onPress={() => navigation.navigate('Home')} />
        <Text>Or</Text>
        <Button
          label="Log in With Google"
          type="google"
          onPress={() => navigation.navigate('Home')}
        />
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
