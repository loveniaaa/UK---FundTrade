import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Mail } from '../../assets'

const Login = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
        <Text style={styles.text}>Log In</Text>
        <View>
            <Mail />
            <TextInput placeholder='Your Email' style={styles.input} keyboardType='email-address' />
        </View>
        <TextInput placeholder='Password' style={styles.input} secureTextEntry={true}/>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Log In With Google</Text></TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default Login

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
        width: 300,
        height: 43,
        borderWidth: 1,
        borderColor:'#5E2590',
        borderRadius: 30,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        marginVertical: 14,
    },
    button: {
        width: 300,
        height: 43,
        borderWidth: 1,
        borderColor: '#5E2590',
        borderRadius: 30,
        backgroundColor: '#5E2590',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginVertical: 14,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
    }
})